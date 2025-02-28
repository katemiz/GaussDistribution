





class Gauss {
    constructor() {

        this.gauss = {
            "-8":0,
            "-6":0,
            "-4":0,
            "-2":0,
            "0":0,
            "2":0,
            "4":0,
            "6":0,
            "8":0,
        }

        this.times = 10000000;
        
        
    }

    DoRandom() {

        let durum = 0;

        for (let index = 1; index <= 8; index++) {

            let r = Math.random()

            if (r < 0.5) {
                durum = durum -1;
            } else {
                durum = durum +1;
            }

            //console.log(r)
        }

        this.gauss[durum] = this.gauss[durum]+1

        // console.log(durum)
        // console.log ('---- Tek Atış')
    }




    RunProgram() {

        for (let index = 1; index <= this.times; index++) {

            this.DoRandom()
        }

        console.log(this.gauss)

        this.CalculateMean()

        this.DoChart();
    }


    CalculateMean() {

        let toplam = 0

        for (let index = 0; index < this.gauss.length; index++) {
            toplam = toplam+ this.gauss[index]

            console.log("this.gauss[index]",this.gauss[index])
            
        }

        console.log("toplam",toplam)
    }


    DoChart() {

        let TESTER = document.getElementById('graph');

        let xData = ["-8","-6","-4","-2","0","2","4","6","8"];
        let yData = [
            this.gauss["-8"],
            this.gauss["-6"],
            this.gauss["-4"],
            this.gauss["-2"],
            this.gauss["0"],
            this.gauss["2"],
            this.gauss["4"],
            this.gauss["6"],
            this.gauss["8"]
        ];




        var trace1 = {

        type: 'bar',

        x: xData,

        y: yData,

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

            text: 'Gauss Distribution for '+this.times+' Random Action'

        },

        font: {size: 18}

        };


        var config = {responsive: true}


        Plotly.newPlot(TESTER, data, layout, config );
    }
}