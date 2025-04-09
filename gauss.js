class Gauss {

    constructor(boxNo,cycleNo) {

        this.boxNo = boxNo
        this.cycleNo = cycleNo    // Odd Number

        this.interval = 100/this.boxNo
    }


    Initialize() {

        this.gauss = {};
        this.xData = [];

        let counter = Math.floor(this.boxNo/2);


        for (let i = -counter; i <= counter; i++) {
            this.gauss[i] = 0;
            this.xData.push(i.toString())
        }
    }


    DoRandom() {

        let durum = 0;

        for (let i = 0; i < this.boxNo-1; i++) {

            if (Math.random() < 0.5) {
                durum = durum -1;
            } else {
                durum = durum +1;
            }
        }

        durum = durum/2;

        this.gauss[durum] = this.gauss[durum]+1
    }




    RunProgram() {

        this.Initialize();    

        let start = performance.now();

        for (let i = 1; i <= this.cycleNo; i++) {
            this.DoRandom()
        }

        let end = performance.now();
        let time = end-start;

        this.DoChart(time);
    }


    CalculateMean() {

        let toplam = 0

        for (let index = 0; index < this.gauss.length; index++) {
            toplam = toplam+ this.gauss[index]            
        }
    }


    DoChart(duration) {

        let TESTER = document.getElementById('graph');

        this.yData = []
        this.textData = []

        let percent;

        this.xData.forEach( element => {
            this.yData.push(this.gauss[element])

            percent = 100*this.gauss[element]/this.cycleNo

            this.textData.push(percent.toFixed(3)+'%')

        })

        var trace1 = {

            type: 'bar',
            x: this.xData,
            y: this.yData,
            text:this.textData,

            marker: {
                color: '#C8A2C8',
                line: {
                    width: 2.5
                }
            }
        };

        var data = [ trace1 ];

        var layout = {

            title: {
                text: 'Gauss Distribution for '+this.cycleNo+' Random Action<br>[Time Elapsed '+duration+' ms]'
            },

            font: {size: 18}
        };

        var config = {responsive: true}
        Plotly.newPlot(TESTER, data, layout, config );
    }


    Refresh(boxNo,cycleNo) 
    {
        this.boxNo = boxNo;
        this.cycleNo =cycleNo;

        this.RunProgram();
    }
}