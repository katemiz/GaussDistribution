class Gauss {

    constructor(boxNo,cycleNo) {

        this.boxNo = boxNo
        this.cycleNo = cycleNo    // Odd Number

        this.interval = 100/this.boxNo
    }


    Initialize() {

        this.gauss = {};
        this.xData = [];

        // let r2;

        let counter = Math.floor(this.boxNo/2);


        for (let i = -counter; i <= counter; i++) {
            this.gauss[i] = 0;
            this.xData.push(i.toString())

            // r2 = i*this.interval

            // console.log("i",i,this.xData)


            // this.xData.push(r2.toFixed(2))
            // this.gauss[r2.toFixed(2)] = 0;




        }
        // console.log("counter",counter)

        // console.log("gauss",this.gauss)
    }


    DoRandom() {

        //let durum = Math.ceil(this.boxNo/2);

        // let counter = Math.floor(this.boxNo/2);


        let durum = 0;


        ///console.log("durum",durum)

        for (let i = 0; i < this.boxNo-1; i++) {

            if (Math.random() < 0.5) {
                durum = durum -1;
            } else {
                durum = durum +1;
            }
        }

        // console.log("durum2",durum)

        durum = durum/2;



        // this.gauss[index.toFixed(2)] = this.gauss[index.toFixed(2)]+1
        this.gauss[durum] = this.gauss[durum]+1

    }




    RunProgram() {

        this.Initialize();    

        for (let i = 1; i <= this.cycleNo; i++) {
            this.DoRandom()
        }

        //this.CalculateMean()
        this.DoChart();

        // console.log(this.gauss)
    }


    CalculateMean() {

        let toplam = 0

        for (let index = 0; index < this.gauss.length; index++) {
            toplam = toplam+ this.gauss[index]            
        }


        // this.gauss.array.forEach(element => {

        //     console.log("Toplam: "+element)

            
        // });

    }


    DoChart() {

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
                text: 'Gauss Distribution for '+this.cycleNo+' Random Action'
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

        // console.log("Refresh Class",this.boxNo,this.cycleNo)

        this.RunProgram();
    }
}