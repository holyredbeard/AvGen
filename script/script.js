var theColor = '#e59225';

var AvGen = {

    paper: null,
	bg: null,
	backColor: '#00AEEF',
    theBody: {
        bodies: [
            [0,0,277.9,308.5,{
				type:'path',
				path:'M 216.2 91 C 225.8 28.2 101 43.8 57.9 84 C 14.8 124.2 31.6 283.5 31.6 283.5 L 252.9 283.5 C 223.5 200.8 222 198.4 215.9 130.2 C 214.6 115.7 214.5 102.3 216.2 91Z',
				'fill': '#e59225',
				'stroke':'none',
				'stroke-width':'0',
				'fill-opacity':'1',
				'stroke-opacity':'0'
			}],
            [0,0,267.3,308.5,{type:'path',path:'M 205.7 91 C 180.3 53 69.7 73 44.3 97 C 19 121 21 283.5 21 283.5 L 242.3 283.5 C 242.3 283.5 231 129 205.7 91Z','fill':'#e59225','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,255.3,298.5,{type:'path',path:'M 35.3 257.2 C 34.4 245.7 45.4 234.1 48.5 223 C 53.6 204.3 55 185 60 166.2 C 69.5 131 69.6 97.1 89.1 65.1 C 103.4 41.7 129.5 5.3 161.3 19.7 C 184.6 30.3 181.3 59.2 188.9 78.9 C 207.5 127.3 228.6 184.8 230.3 237.3 C 231.3 268.6 202.8 261.3 178.2 264 C 149.2 267.1 120 269.6 91 272.2 C 84.2 272.8 75.8 274.2 69 273 C 60.9 271.6 28.9 259.9 31.3 249.2','fill':'#DB6EDB','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,255.3,298.5,{type:'path',path:'M 350.3 257.2 C 34.4 245.7 45.4 234.1 48.5 223 C 53.6 204.3 55 185 60 166.2 C 69.5 131 69.6 97.1 89.1 65.1 C 103.4 41.7 129.5 5.3 161.3 19.7 C 184.6 30.3 181.3 59.2 188.9 78.9 C 207.5 127.3 228.6 184.8 230.3 237.3 C 231.3 268.6 202.8 261.3 178.2 264 C 149.2 267.1 120 269.6 91 272.2 C 84.2 272.8 75.8 274.2 69 273 C 60.9 271.6 28.9 259.9 31.3 249.2','fill':'#DB6EDB','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,255.3,298.5,{type:'path',path:'M 35.3 257.2 C 34.4 245.7 495.4 234.1 48.5 223 C 53.6 204.3 55 185 60 166.2 C 69.5 131 69.6 97.1 89.1 65.1 C 103.4 41.7 129.5 5.3 161.3 19.7 C 184.6 30.3 181.3 59.2 188.9 78.9 C 207.5 127.3 228.6 184.8 230.3 237.3 C 231.3 268.6 202.8 261.3 178.2 264 C 149.2 267.1 120 269.6 91 272.2 C 84.2 272.8 75.8 274.2 69 273 C 60.9 271.6 28.9 259.9 31.3 249.2','fill':'#DB6EDB','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
        ],
        currNr: 1,
        currObj: null,
		bodyColor: '#e59225'
    },
    eyes: {
        eyes: [
            [0,0,148.4,149.8,{type:'path',path:'M -60.5 68.5','fill':'none','stroke':'#009444','stroke-width':'6','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 123.4 71.1 C 123.4 112.3 78.7 138.1 43 117.5 C 7.2 96.9 7.2 45.3 43 24.6 C 78.4 4.2 122.7 29.3 123.4 70.1','fill':'#ffffff','stroke':'#ffffff','stroke-miterlimit':'10','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 111.7 68.3 C 111.7 99.5 77.9 119 50.9 103.4 C 23.9 87.8 23.9 48.9 50.9 33.3 C 77.6 17.8 111.1 36.8 111.7 67.6','fill':'#020202','stroke':'#000000','stroke-miterlimit':'10','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 93.6 47.8 C 93.6 55.4 85.3 60.2 78.6 56.4 C 72 52.5 72 43 78.6 39.1 C 85.2 35.3 93.4 40 93.6 47.6','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 80.9 84.6 C 80.9 102.6 61.5 113.8 45.9 104.8 C 30.4 95.8 30.4 73.4 45.9 64.4 C 61.3 55.6 80.6 66.5 80.9 84.2','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,143.9,140.9,{type:'path',path:'M 118.9 70.4 C 118.9 105.4 80.9 127.3 50.6 109.8 C 20.3 92.3 20.3 48.5 50.6 31 C 80.6 13.6 118.3 34.9 118.9 69.6','fill':'#231f20','stroke':'#ffffff','stroke-miterlimit':'10','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 94.9 69.9 C 94.9 86.8 76.5 97.4 61.9 88.9 C 47.2 80.4 47.2 59.3 61.9 50.8 C 76.4 42.4 94.6 52.7 94.9 69.5','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 84.4 69.9 C 84.4 78.7 74.8 84.3 67.1 79.8 C 59.4 75.4 59.4 64.3 67.1 59.9 C 74.7 55.5 84.2 60.9 84.4 69.7','fill':'#231f20','stroke':'#ffffff','stroke-miterlimit':'10','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,113.9,139.9,{type:'path',path:'M 88.9 97.4 C 88.9 107 81 114.9 71.4 114.9 L 71.4 114.9 C 61.7 114.9 53.9 107 53.9 97.4 L 53.9 42.9 C 53.9 33.2 61.7 25.4 71.4 25.4 L 71.4 25.4 C 81 25.4 88.9 33.2 88.9 42.9 L 88.9 97.4Z','fill':'none','stroke':'#000000','stroke-width':'5','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 88.9 96.9 C 88.9 110.3 74.3 118.8 62.6 112 C 50.9 105.3 50.9 88.4 62.6 81.7 C 74.2 75 88.6 83.2 88.9 96.6','fill':'#000000','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,129.6,105.5,{type:'path',path:'M -60.5 68.5','fill':'none','stroke':'#009444','stroke-width':'6','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 40.3 66.6 L 46.1 68.9 L 74.9 80.5 L 40.3 66.6','fill':'none','stroke':'#000000','stroke-width':'9','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 70.7 80.5 L 104.6 66.6 L 70.7 80.5','fill':'none','stroke':'#000000','stroke-width':'9','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 63.1 57.5','fill':'none','stroke':'#000000','stroke-width':'5','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'}],
            [0,0,151.4,112.9,{type:'path',path:'M -60.5 68.5','fill':'none','stroke':'#009444','stroke-width':'6','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 126.4 67.9 C 126.4 78.9 117.4 87.9 106.4 87.9 L 37.9 87.9 C 26.8 87.9 17.9 78.9 17.9 67.9 L 17.9 67.9 C 17.9 56.8 26.8 47.9 37.9 47.9 L 106.4 47.9 C 117.4 47.9 126.4 56.8 126.4 67.9 L 126.4 67.9Z','fill':'none','stroke':'#000000','stroke-width':'4','stroke-miterlimit':'10','fill-opacity':'1','stroke-opacity':'1'},{type:'path',path:'M 90.4 68.1 C 90.4 82.9 74.3 92.2 61.5 84.8 C 48.7 77.4 48.7 58.9 61.5 51.4 C 74.2 44.1 90.1 53.1 90.4 67.8','fill':'#000000','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
        ],
        ax: 70,
        ay: 100,
        bx: 180,
        by: 100,
        aSize: 0.5,
        bSize: 0.5,
        distance: 20,
        currNr: 0,
        currAObj: null,
        currBObj: null,
    },
    nose: {
        noses: [
            [0,0,148.3,164.6,{type:'path',path:'M 21.5 18.1 C 53 50.9 84.5 83.8 116 116.6 C 116.4 117 116.4 119.2 115.9 120.2 C 114.6 122.7 110.9 124.3 108.2 125.4 C 97.7 129.4 86 130.4 74.9 131.3 C 57.6 132.7 40 132.9 22.7 132.2 C 18.2 132 18.2 139 22.7 139.2 C 44.7 140.1 67.3 139.8 89.2 136.8 C 99.2 135.4 113.3 133.9 120.5 125.8 C 125.5 120 123 113.7 118.4 109 C 87.8 77.1 57.1 45.1 26.5 13.2 C 23.3 9.9 18.4 14.9 21.5 18.1 L 21.5 18.1Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 65 108.8 C 62.2 108.6 59.2 108.9 56.4 109.1 C 46 109.7 34 109.4 24.1 113 C 13.3 116.9 12.3 128.4 18.7 136.8 C 21.4 140.3 27.5 136.8 24.8 133.2 C 23.3 131.3 22.2 129.1 21.6 126.7 C 20.1 120.7 27.5 119 32 118.2 C 40.7 116.6 49.9 116.5 58.8 115.9 C 60.8 115.8 62.9 115.6 65 115.8 C 69.5 116 69.5 109 65 108.8 L 65 108.8Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,148.3,164.6,{type:'path',path:'M 21.5 18.1 C 53 50.9 84.5 83.8 116 116.6 C 116.4 117 116.4 119.2 115.9 120.2 C 114.6 122.7 110.9 124.3 108.2 125.4 C 97.7 129.4 86 130.4 74.9 131.3 C 57.6 132.7 40 132.9 22.7 13.2 C 18.2 132 18.2 139 22.7 139.2 C 44.7 140.1 67.3 139.8 89.2 136.8 C 99.2 135.4 113.3 133.9 120.5 125.8 C 125.5 120 123 113.7 118.4 109 C 87.8 77.1 57.1 45.1 26.5 13.2 C 23.3 9.9 18.4 14.9 21.5 18.1 L 21.5 18.1Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 65 108.8 C 62.2 108.6 59.2 108.9 56.4 109.1 C 46 109.7 34 109.4 24.1 113 C 13.3 116.9 12.3 128.4 18.7 136.8 C 21.4 140.3 27.5 136.8 24.8 133.2 C 23.3 131.3 22.2 129.1 21.6 126.7 C 20.1 120.7 27.5 119 32 118.2 C 40.7 116.6 49.9 116.5 58.8 115.9 C 60.8 115.8 62.9 115.6 65 115.8 C 69.5 116 69.5 109 65 108.8 L 65 108.8Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,148.3,164.6,{type:'path',path:'M 210.5 18.1 C 53 50.9 84.5 83.8 116 116.6 C 116.4 117 116.4 119.2 115.9 120.2 C 114.6 122.7 110.9 124.3 108.2 125.4 C 97.7 129.4 86 130.4 74.9 131.3 C 57.6 132.7 40 132.9 22.7 13.2 C 18.2 132 18.2 139 22.7 139.2 C 44.7 140.1 67.3 139.8 89.2 136.8 C 99.2 135.4 113.3 133.9 120.5 125.8 C 125.5 120 123 113.7 118.4 109 C 87.8 77.1 57.1 45.1 26.5 13.2 C 23.3 9.9 18.4 14.9 21.5 18.1 L 21.5 18.1Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 65 108.8 C 62.2 108.6 59.2 108.9 56.4 109.1 C 46 109.7 34 109.4 24.1 113 C 13.3 116.9 12.3 128.4 18.7 136.8 C 21.4 140.3 27.5 136.8 24.8 133.2 C 23.3 131.3 22.2 129.1 21.6 126.7 C 20.1 120.7 27.5 119 32 118.2 C 40.7 116.6 49.9 116.5 58.8 115.9 C 60.8 115.8 62.9 115.6 65 115.8 C 69.5 116 69.5 109 65 108.8 L 65 108.8Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,148.3,164.6,{type:'path',path:'M 21.5 18.1 C 53 500.9 84.5 83.8 116 116.6 C 116.4 117 116.4 119.2 115.9 120.2 C 114.6 122.7 110.9 124.3 108.2 125.4 C 97.7 129.4 86 130.4 74.9 131.3 C 57.6 132.7 40 132.9 22.7 13.2 C 18.2 132 18.2 139 22.7 139.2 C 44.7 140.1 67.3 139.8 89.2 136.8 C 99.2 135.4 113.3 133.9 120.5 125.8 C 125.5 120 123 113.7 118.4 109 C 87.8 77.1 57.1 45.1 26.5 13.2 C 23.3 9.9 18.4 14.9 21.5 18.1 L 21.5 18.1Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 65 108.8 C 62.2 108.6 59.2 108.9 56.4 109.1 C 46 109.7 34 109.4 24.1 113 C 13.3 116.9 12.3 128.4 18.7 136.8 C 21.4 140.3 27.5 136.8 24.8 133.2 C 23.3 131.3 22.2 129.1 21.6 126.7 C 20.1 120.7 27.5 119 32 118.2 C 40.7 116.6 49.9 116.5 58.8 115.9 C 60.8 115.8 62.9 115.6 65 115.8 C 69.5 116 69.5 109 65 108.8 L 65 108.8Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,148.3,164.6,{type:'path',path:'M 21.5 18.1 C 533 50.9 84.5 83.8 116 116.6 C 116.4 117 116.4 119.2 115.9 120.2 C 114.6 122.7 110.9 124.3 108.2 125.4 C 97.7 129.4 86 130.4 74.9 131.3 C 57.6 132.7 40 132.9 22.7 13.2 C 18.2 132 18.2 139 22.7 139.2 C 44.7 140.1 67.3 139.8 89.2 136.8 C 99.2 135.4 113.3 133.9 120.5 125.8 C 125.5 120 123 113.7 118.4 109 C 87.8 77.1 57.1 45.1 26.5 13.2 C 23.3 9.9 18.4 14.9 21.5 18.1 L 21.5 18.1Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 65 108.8 C 62.2 108.6 59.2 108.9 56.4 109.1 C 46 109.7 34 109.4 24.1 113 C 13.3 116.9 12.3 128.4 18.7 136.8 C 21.4 140.3 27.5 136.8 24.8 133.2 C 23.3 131.3 22.2 129.1 21.6 126.7 C 20.1 120.7 27.5 119 32 118.2 C 40.7 116.6 49.9 116.5 58.8 115.9 C 60.8 115.8 62.9 115.6 65 115.8 C 69.5 116 69.5 109 65 108.8 L 65 108.8Z','fill':'#727373','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
        ],
        size: 0.6,
        x: 140,
        y: 110,
        currNr: 0,
        currObj: null
    },
    mouth: {
        mouths: [
            [0,0,215.1,141.9,{type:'path',path:'M 9.1 78.4 C 12.2 83.2 16.9 87 21.2 90.7 C 26.4 95.3 32 99 38.2 102.3 C 54.1 110.8 71.8 115.3 89.8 116.6 C 125.1 119.1 161 107.5 188.9 86 C 192.5 83.2 187.5 78.3 183.9 81 C 158.1 101 125.3 111 92.8 109.7 C 76.1 109.1 59.6 104.9 44.5 97.7 C 38.5 94.8 32.9 91.5 27.8 87.2 C 23.5 83.6 18.2 79.7 15.1 74.9 C 12.7 71.1 6.6 74.6 9.1 78.4 L 9.1 78.4Z','fill':'#444444','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,184.7,130.7,{type:'path',path:'M 105 88.7 C 116.3 88.7 127.6 88.7 138.9 88.7 C 138.9 93.9 136.8 97.8 133.9 100.7 C 131.2 103.5 127.2 105.6 122 105.7 C 116.9 105.7 112.8 103.6 110 100.8 C 107.1 97.9 105.1 94.1 104.9 89 C 104.9 88.8 104.9 88.7 105 88.7Z','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 59.4 88.7 C 70.7 88.7 82 88.7 93.2 88.7 C 93.2 93.9 91.1 97.8 88.3 100.7 C 85.5 103.5 81.5 105.6 76.4 105.7 C 71.2 105.7 67.1 103.6 64.3 100.8 C 61.5 97.9 59.4 94.1 59.2 89 C 59.2 88.8 59.2 88.7 59.4 88.7Z','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 43.7 88.8 C 81.2 88.8 118.8 88.8 156.3 88.8 C 160.8 88.8 160.8 81.8 156.3 81.8 C 118.8 81.8 81.2 81.8 43.7 81.8 C 39.2 81.8 39.2 88.8 43.7 88.8 L 43.7 88.8Z','fill':'#383839','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 62 92.5 C 71.6 92.5 81.1 92.5 90.7 92.5 C 92.6 92.5 92.6 89.5 90.7 89.5 C 81.1 89.5 71.6 89.5 62 89.5 C 60.1 89.5 60.1 92.5 62 92.5 L 62 92.5Z','fill':'#dedddd','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 108 92.5 C 117.6 92.5 127.1 92.5 136.7 92.5 C 138.6 92.5 138.6 89.5 136.7 89.5 C 127.1 89.5 117.6 89.5 108 89.5 C 106.1 89.5 106.1 92.5 108 92.5 L 108 92.5Z','fill':'#dedddd','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,182,148.9,{type:'path',path:'M 48.5 120.5 C 48.4 109 49.4 96.3 57.4 87.2 C 67 76.4 83.1 77.3 96.3 77.1 C 110.1 76.8 125.4 77.6 136.4 87.1 C 145.9 95.3 149.9 108.3 150 120.5 C 150.1 125 157.1 125 157 120.5 C 156.8 106.6 152.3 93 142.3 83.1 C 130.8 71.6 113.4 70 98 70.1 C 82.3 70.1 65.6 70 53.4 81.3 C 42.9 91 41.3 107.1 41.5 120.5 C 41.6 125 48.6 125 48.5 120.5 L 48.5 120.5Z','fill':'#4a494a','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,193,128,{type:'path',path:'M 40.8 80.7 C 36.1 80.8 34.9 82.7 33.6 86.9 C 32.5 90.6 32.3 94.9 35.3 97.8 C 37.2 99.8 42 100.1 44.5 99.6 C 48.8 98.9 52.3 95.9 55.7 93.5 C 59.8 90.6 63.8 87.8 68.7 86.4 C 74.4 84.7 81.8 84.9 87.7 85.9 C 91.5 86.6 95.2 88.5 99.1 88.6 C 104.4 88.8 109.9 87.3 115.1 86.7 C 120.3 86.1 125.6 86.3 130.5 88.6 C 134.3 90.5 137.5 93.4 140.9 95.9 C 146.7 100.2 154.7 103.5 162.1 101.8 C 169.1 100.2 169.9 91.2 164.4 87.1 C 156.8 81.6 150.4 89.3 150.6 96.8 C 150.6 101.3 157.6 101.4 157.6 96.8 C 157.5 96.1 157.6 91.4 159.8 92.4 C 163.1 94 160.3 95 159 95.1 C 156.3 95.1 153.8 94.7 151.3 93.9 C 146.5 92.2 142.4 88.2 138.3 85.3 C 126.6 76.9 114.3 80.4 101 81.5 C 95.8 81.8 90.6 79.1 85.4 78.6 C 78.8 77.9 71.7 78.2 65.4 80 C 59.5 81.7 54.5 85.8 49.7 89.2 C 47.6 90.7 45.2 92.7 42.6 92.8 C 37.9 93 40.4 88.6 41.2 85.8 C 40.4 86.6 39.6 87.4 38.8 88.2 C 39.4 88 40.1 87.9 40.8 87.7 C 45.3 87.6 45.3 80.6 40.8 80.7 L 40.8 80.7Z','fill':'#645029','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 73 103 C 88.8 103 104.7 103 120.5 103 C 125 103 125 96 120.5 96 C 104.7 96 88.8 96 73 96 C 68.5 96 68.5 103 73 103 L 73 103Z','fill':'#4a494a','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}],
            [0,0,194.7,143.9,{type:'path',path:'M 161.2 93.7 C 155.6 97.9 144.7 95.1 145.7 86.4 C 142.9 93.7 127 94.4 127.6 82.6 C 126.6 91.6 109.3 92.2 109.7 81.4 C 108.5 89.4 94 92.3 90.7 82.3 C 90.3 90.5 74.5 91.9 72.8 83.8 C 72.3 92.4 57.5 94.4 54.4 86.7 C 54.5 94.6 44.5 98.1 38.6 93.7 C 41.2 75.8 70.7 76.7 91.3 75 C 95 74.7 100.9 74.8 105.3 75 C 128.8 76 157.6 75.6 161.2 93.7Z','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 91.3 74.4 C 105.6 73.7 119.3 74.3 132.5 75.9 C 141.5 76.9 157.6 78.6 161.5 89 C 166.4 101.9 155.8 112.1 142.2 111.3 C 128.5 110.5 114.9 107.5 97.1 107.5 C 88.9 107.5 81.3 108.2 74.3 108.9 C 66.2 109.8 55.4 113.1 48.2 110.4 C 39.5 107.2 32.9 93 41.8 83.8 C 49.3 76 72.5 75.3 91.3 74.4Z M 105.3 75 C 100.9 74.8 95 74.7 91.3 75 C 70.7 76.7 41.2 75.8 38.6 93.7 C 44.5 98.1 54.5 94.6 54.4 86.7 C 57.5 94.5 72.3 92.4 72.8 83.8 C 74.5 91.9 90.3 90.5 90.7 82.3 C 94 92.3 108.5 89.4 109.7 81.4 C 109.3 92.2 126.6 91.6 127.6 82.6 C 127 94.4 142.9 93.7 145.7 86.4 C 144.7 95.1 155.6 97.9 161.2 93.7 C 157.6 75.6 128.8 76 105.3 75Z','fill':'#000000','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 169.7 118.9 C 123.3 118.9 76.8 118.9 30.4 118.9 C 30.4 101.7 30.4 84.6 30.4 67.4 C 76.8 67.4 123.3 67.4 169.7 67.4 C 169.7 84.6 169.7 101.7 169.7 118.9Z M 87.5 68.6 C 73 69.2 55 69.2 44.1 74.7 C 34.5 79.5 26.3 94.5 33 105.4 C 36 110.4 43.9 117 52.9 117.7 C 60.5 118.4 68.1 115.8 75.8 114.8 C 90.5 113 110.2 113 124.3 114.8 C 132 115.8 139.5 118.5 147.5 117.7 C 162 116.3 174.1 100.6 166.2 84.9 C 161 74.7 148.4 72 134.9 70.3 C 120.3 68.5 104 67.8 87.5 68.6Z','fill':'#ffffff','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'},{type:'path',path:'M 134.9 70.3 C 148.4 72 161 74.7 166.2 84.9 C 174.1 100.6 162 116.3 147.5 117.7 C 139.5 118.5 132 115.8 124.3 114.8 C 110.2 113 90.5 113 75.8 114.8 C 68.1 115.8 60.5 118.4 52.9 117.7 C 43.9 117 36 110.4 33 105.4 C 26.3 94.5 34.5 79.5 44.1 74.7 C 55 69.2 73 69.2 87.5 68.6 C 104 67.8 120.3 68.5 134.9 70.3Z M 41.8 83.8 C 32.9 93 39.5 107.2 48.2 110.4 C 55.4 113.1 66.2 109.8 74.3 108.9 C 81.3 108.2 88.9 107.5 97.1 107.5 C 114.9 107.5 128.5 110.5 142.2 111.3 C 155.8 112.1 166.4 101.9 161.5 89 C 157.6 78.6 141.5 76.9 132.5 75.9 C 119.3 74.3 105.6 73.7 91.3 74.4 C 72.5 75.3 49.3 76 41.8 83.8Z','fill':'#93dae5','stroke':'none','stroke-width':'0','fill-opacity':'1','stroke-opacity':'0'}]

        ],
        size: 1,
        x: 60,
        y: 150,
        currNr: 0,
        currObj: null,
    },

    // Funktion för att skapa fönstret
    init: function() {
        this.loadSVG();
        this.toolBox();
        this.randomChar();
		this.hover();
		this.saveImage();
    },

    loadSVG: function() {

        var theBody = this.theBody.bodies[1];     // default body
        var eyes = this.eyes.eyes[0];          // default eyes
        var nose = this.nose.noses[0];         // default nose
        var mouth = this.mouth.mouths[0];         // default mouth

        this.paper = Raphael('avatarBox', 300, 300);

        // Add svg:s
        this.addSVG(theBody, eyes, nose, mouth, 1);
    },

    addSVG: function(theBody, eyes, nose, mouth, start) {
        if (this.theBody.currObj !== null) {
            this.theBody.currObj.remove();
            this.eyes.currAObj.remove();
            this.eyes.currBObj.remove();
            this.nose.currObj.remove();
            this.mouth.currObj.remove();
        }

        this.theBody.currObj = AvGen.paper.add(theBody).toBack().transform('T20, 20');
        this.eyes.currAObj = this.paper.add(eyes).transform('s' + this.eyes.aSize + ',' + this.eyes.aSize + ', 0, 0, T' + this.eyes.ax + ', ' + this.eyes.ay);
        this.eyes.currBObj = this.paper.add(eyes).transform('s' + this.eyes.bSize + ',' + this.eyes.bSize + ', 0, 0, T' + this.eyes.bx + ',' + this.eyes.by);
        this.nose.currObj = this.paper.add(nose).transform('s0.6, 0.6, 0, 0, T' + this.nose.x + ',' + this.nose.y);
        this.mouth.currObj = this.paper.add(mouth).transform('s' + this.mouth.size + ',' + this.mouth.size + ', 0, 0, T' + this.mouth.x + ',' + this.mouth.y);
		
		if (start == 1) {
			this.bg = this.paper.rect(1, 1, 299, 299, 5).attr({ fill: AvGen.backColor,'stroke':'none' });
		}
		this.bg.attr({ fill: AvGen.backColor,'stroke':'none' }).toBack();

        this.paper.canvas.className.baseVal = 'charBody';
		AvGen.theBody.currObj.attr('fill', AvGen.theBody.bodyColor);
    },

    toolBox: function() {
        var moveLeftBtn = $('#moveLeftBtn'),
            moveRightBtn = $('#moveRightBtn'),
            fgColorBtn = $('.fgBox'),
            bgColorBtn = $('.bgBox'),
            charBody = $('.charBody');

        var prevEyesBtn = $('#prevEyesBtn'),
            nextEyesBtn = $('#nextEyesBtn'),
            smallerEyesBtn = $('#smallerEyesBtn'),
            biggerEyesBtn = $('#biggerEyesBtn'),
            moveDownEyesBtn = $('#moveDownEyesBtn'),
            moveUpEyesBtn = $('#moveUpEyesBtn'),
            moveTogetherEyesBtn = $('#moveTogetherEyesBtn'),
            moveApartEyesBtn = $('#moveApartEyesBtn');

        var prevNoseBtn = $('#prevNoseBtn'),
            nextNoseBtn = $('#nextNoseBtn'),
            smallerNoseBtn = $('#smallerNoseBtn'),
            biggerNoseBtn = $('#biggerNoseBtn'),
            moveDownNoseBtn = $('#moveDownNoseBtn'),
            moveUpNoseBtn = $('#moveUpNoseBtn');

        var prevMouthBtn = $('#prevMouthBtn'),
            nextMouthBtn = $('#nextMouthBtn'),
            smallerMouthBtn = $('#smallerMouthBtn'),
            biggerMouthBtn = $('#biggerMouthBtn'),
            moveDownMouthBtn = $('#moveDownMouthBtn'),
            moveUpMouthBtn = $('#moveUpMouthBtn');

        // Change color of the background
        bgColorBtn.on('click', function() {
			changeColor($(this), 'bg');
        });


        /* EVENT HANDLERS FOR THE BODY */
        
        // Change color of body
        fgColorBtn.on('click', function() {
			changeColor($(this), 'fg');
        });

        // Change to previous body
        moveLeftBtn.on('click', function(){
			
			if (AvGen.theBody.currNr == 0) { AvGen.theBody.currNr = 5; }
			
			changePart(-1, AvGen.theBody);
        });

        // Change to next body
        moveRightBtn.on('click', function(){
			
			if (AvGen.theBody.currNr >= 4) { AvGen.theBody.currNr = -1; }
			
			changePart(1, AvGen.theBody);
        });


        /* EVENT HANDLERS FOR THE EYES */

        // Change to previous eyes
        prevEyesBtn.on('click', function(){

            if (AvGen.eyes.currNr == 0) { AvGen.eyes.currNr = 5; };
			
			changePart(-1, AvGen.eyes);
        });

        // Change to next eyes
        nextEyesBtn.on('click', function(){

            if (AvGen.eyes.currNr >= 4) { AvGen.eyes.currNr = -1 };
			
			changePart(1, AvGen.eyes);
        });

        // Function to make the eyes smaller
        smallerEyesBtn.on('click', function() {
            //var eyes = AvGen.eyes['eye' + AvGen.eyes.currEyesNr];
            var eyes = AvGen.eyes;

            if (eyes.bSize >= 0.3) { changeEyeSize(eyes, 1) };
        });

        // Function to make the eyes bigger
        biggerEyesBtn.on('click', function() {
            var eyes = AvGen.eyes;

            if (eyes.bSize <= 1.8) { changeEyeSize(eyes, -1) };
        });

        // Move down the eyes
        moveDownEyesBtn.on('click', function() {
            var eyes = AvGen.eyes;

            moveEyesVertical(eyes, 1);
        });

        // Move up the eyes
        moveUpEyesBtn.on('click', function() {
            var eyes = AvGen.eyes;

            moveEyesVertical(eyes, -1);
        });

        // Move eyes together
        moveTogetherEyesBtn.on('click', function() {
            moveEyeDistance(1);
        });

        // Move eyes apart
        moveApartEyesBtn.on('click', function() {
            moveEyeDistance(-1);
        });


        /* EVENT HANDLERS FOR THE NOSE */

        // Change to previous eyes
        prevNoseBtn.on('click', function(){
            if (AvGen.nose.currNr == 0) { AvGen.nose.currNr = 5 };
			
			changePart(-1, AvGen.nose);
        });

        // Change to next eyes
        nextNoseBtn.on('click', function(){
            if (AvGen.nose.currNr >= 4) { AvGen.nose.currNr = -1 };
			
			changePart(1, AvGen.nose);
        });

        // Make nose smaller
        smallerNoseBtn.on('click', function() {
            if (AvGen.nose.size >= 0.3) { changeNoseSize(1) };
        });

        // Make nose bigger
        biggerNoseBtn.on('click', function() {
            if (AvGen.nose.size <= 1.8) { changeNoseSize(-1) };
        });

        // Move down nose
        moveDownNoseBtn.on('click', function() {
            moveNoseVertical(1);
        });

        // Move up nose
        moveUpNoseBtn.on('click', function() {
            moveNoseVertical(-1);
        });


        /* EVENT HANDLERS FOR THE MOUTH */

        // Change to previous eyes
        prevMouthBtn.on('click', function(){
            if (AvGen.mouth.currNr == 0) { AvGen.mouth.currNr = 5 };
			
			changePart(-1, AvGen.mouth);
        });

        // Change to next eyes
        nextMouthBtn.on('click', function(){
            if (AvGen.mouth.currNr >= 4) { AvGen.mouth.currNr = -1 };
			
			changePart(1, AvGen.mouth);
        });

        // Make nose smaller
        smallerMouthBtn.on('click', function() {
            if (AvGen.mouth.size >= 0.3) { changeMouthSize(1) };
        });

        // Make nose bigger
        biggerMouthBtn.on('click', function() {
            if (AvGen.mouth.size <= 1.8) { changeMouthSize(-1) };
        });

        // Move down nose
        moveDownMouthBtn.on('click', function() {
            moveMouthVertical(1);
        });

        // Move up nose
        moveUpMouthBtn.on('click', function() {
            moveMouthVertical(-1);
        });
		
		// Change the color of either the background or the body
		function changeColor(elem, theType) {

			// Check if element contains of a hover class and if so remove it.
			if(/_hover\b/.test(elem.attr('class'))) {
				var lastClass = elem.attr('class').split(' ').pop();
				elem.removeClass(lastClass);	
			}
			
            var color = elem.css('backgroundColor');
            color = hexc(color);
			
			if (theType === 'bg') {
				$('#avatarBox rect').attr('fill', color);
				AvGen.backColor = color;
			}
			else {
	            AvGen.theBody.currObj.attr('fill', color);
	            AvGen.theBody.bodyColor = color;
			}
			
            var body = AvGen.theBody.bodies[AvGen.theBody.currNr],
                eyes = AvGen.eyes.eyes[AvGen.eyes.currNr],
                nose = AvGen.nose.noses[AvGen.nose.currNr],
                mouth = AvGen.mouth.mouths[AvGen.mouth.currNr];

            AvGen.addSVG(body, eyes, nose, mouth);
		}

        /* FUNCTIONS FOR ALL PARTS */

        function changePart(direction, bodyPart) {

            bodyPart.currNr += direction * 1;
			
            var body = AvGen.theBody.bodies[AvGen.theBody.currNr],
                eyes = AvGen.eyes.eyes[AvGen.eyes.currNr],
                nose = AvGen.nose.noses[AvGen.nose.currNr],
                mouth = AvGen.mouth.mouths[AvGen.mouth.currNr];

            AvGen.addSVG(body, eyes, nose, mouth);
        }


        /* FUNCTIONS FOR MANIPULATING THE EYES */

        // Function to change size of the eyes
        function changeEyeSize(eyes, k) {
            eyes.ax = fixPosition(eyes.ax);
            eyes.ay = fixPosition(eyes.ay);
            eyes.bx = fixPosition(eyes.bx);
            eyes.by = fixPosition(eyes.by);
            
            eyes.aSize = newSize(eyes.aSize);
            eyes.bSize = newSize(eyes.bSize);

            function fixPosition(eye) {
                eye += k * 8;
                return eye;
            }

            function newSize(eye) {
                eye += -k * 0.1;
                eye = Math.round(eye * 10) / 10;
                return eye;
            }

            transformEyes(eyes);
        }

        // Function for moving the eyes up or down
        function moveEyesVertical(eyes, k) {
            eyes.ay = calculatePosition(eyes.ay, k);
            eyes.by = calculatePosition(eyes.by, k);

            function calculatePosition(eyes, k){
                return eyes += k * 10;
            }

            transformEyes(eyes);
        }

        // Function for changing the distance from the eyes
        function moveEyeDistance(k) {
            var l = -1,
                eyes = AvGen.eyes;

            if (k == -1) { l = 1 };

            eyes.ax = calculatePosition(eyes.ax, k);
            eyes.bx = calculatePosition(eyes.bx, l);

            function calculatePosition(eyes, n){
                eyes += n * 10;
                return Math.round(eyes * 10) / 10;
            }

            transformEyes(eyes);
        }


        /* FUNCTIONS FOR MANIPULATING THE NOSE */

        // Function for changing the nose size
        function changeNoseSize(k) {
            var nose = AvGen.nose;
            nose.x += k * 5;
            nose.y += k * 10;
            nose.size += -k * 0.1;

            transformNose(nose);
        }

        // Function to move nose up or down
        function moveNoseVertical(k) {
            var nose = AvGen.nose;
            nose.y += k * 10;

            transformNose(nose);
        }


        /* FUNCTIONS FOR MANIPULATING THE MOUTH */

        // Function for changing the nose size
        function changeMouthSize(k) {
            var mouth = AvGen.mouth;
            mouth.x += k * 10;
            mouth.y += k * 10;
            mouth.size += -k * 0.1;

            transformMouth(mouth);
        }

        // Function to move nose up or down
        function moveMouthVertical(k) {
            var mouth = AvGen.mouth;
            mouth.y += k * 10;

            transformMouth(mouth);
        }

        // Function for transforming the eyes
        function transformEyes(eyes) {
            AvGen.eyes.currAObj.transform('S' + eyes.aSize + ', ' + eyes.aSize + ', 0, 0, T' + eyes.ax + ', ' + eyes.ay);
            AvGen.eyes.currBObj.transform('S' + eyes.bSize + ', ' + eyes.bSize + ', 0, 0, T' + eyes.bx + ', ' + eyes.by);   
        }

        // Function for transforming the nose
        function transformNose(nose) {
            AvGen.nose.currObj.transform('S' + nose.size + ', ' + nose.size + ', 0, 0, T' + nose.x + ', ' + nose.y);   
        }

         // Function for transforming the mouth
        function transformMouth(mouth) {
            AvGen.mouth.currObj.transform('S' + mouth.size + ', ' + mouth.size + ', 0, 0, T' + mouth.x + ', ' + mouth.y);   
        }

        // Convert rgb to hex
        function hexc(colorval) {
            var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete(parts[0]);
            for (var i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }
            return '#' + parts.join('');
        }
    },

    randomChar: function() {
        var randomBtn = $('#randomBtn');

        randomBtn.on('click', function() {

            var theBodyNr = getPart();
            var eyesNr = getPart();
            var noseNr = getPart();
            var mouthNr = getPart();

            AvGen.theBody.currNr = theBodyNr;
            AvGen.eyes.currNr = eyesNr;
            AvGen.nose.currNr = noseNr;
            AvGen.mouth.currNr = mouthNr;

            var theBody = AvGen.theBody.bodies[theBodyNr];     // default body
            var eyes = AvGen.eyes.eyes[eyesNr];          // default eyes
            var nose = AvGen.nose.noses[noseNr];         // default nose
            var mouth = AvGen.mouth.mouths[mouthNr];         // default mouth

            var eyesPos = getVerticalPos('eyes');
            AvGen.eyes.ay = eyesPos;
            AvGen.eyes.by = eyesPos;

            AvGen.nose.y = getVerticalPos('nose');
            if (AvGen.nose.y >= AvGen.eyes.ay) {
                AvGen.nose.y = (AvGen.eyes.ay - 40);
            }
            if (AvGen.mouth.y >= AvGen.nose.y) {
                if (AvGen.nose.y > 140) {
                    AvGen.mouth.y = (AvGen.nose.y - 20);
                }
            }

            console.log('eyes:' + AvGen.eyes.ay);
            console.log('näsa:' + AvGen.nose.y);
            console.log('mun:' + AvGen.mouth.y);

            AvGen.mouth.y = getVerticalPos('mouth');

            AvGen.addSVG(theBody, eyes, nose, mouth);

            function getPart(toRandom) {
                return Math.floor(Math.random() * 5);
            }
            function getVerticalPos(toRandom) {
                var randNr = 0;

                if (toRandom == 'nose') {
                    randNr = Math.floor(Math.random() * 12) + 9;
                }
                else if (toRandom == 'mouth') {
                    randNr = Math.floor(Math.random() * 7) + 9;
                }
                else if (toRandom == 'eyes') {
                    randNr = Math.floor(Math.random() * 15) + 5;
                }

                return randNr * 10;
            }

            function getColor() {

            }

            //function get

            /*this.theBody.bodies[bodyNr];
            this.theBody.currNr
            this.theBody.bodyColor
            this.theBody.currObj*/
        });
    },
	
	hover: function() {

		var colorClass = null,
			hoverClass = null;
		
		$("div,span,p.myClass")
		
		$('.bgBox,.fgBox').hover(
		    function() { // handlerIn
				colorClass = $(this).attr('class').split(' ')[1];
				hoverClass = colorClass + '_hover';
					
		        $(this).addClass(hoverClass);
		    },
		    function() { // handlerOut
				colorClass = $(this).attr('class').split(' ')[1];
				hoverClass = colorClass + '_hover';
					
		        $(this).removeClass(hoverClass);
		    }
		);
	},
	
	saveImage: function() {
		
		$('#saveBtn').on('click', function() {
			var svg = AvGen.paper.toSVG();
			canvg(document.getElementById('myCanvas'), svg);
			
            var fileURL = document.getElementById('myCanvas').toDataURL("image/png");

			SaveToDisk(fileURL, 'avatar');
		});
		
		function SaveToDisk(fileURL, fileName) {
		    // for non-IE
		    if (!window.ActiveXObject) {
		        var save = document.createElement('a');
		        save.href = fileURL;
		        save.target = '_blank';
		        save.download = fileName || 'unknown';

		        var event = document.createEvent('Event');
		        event.initEvent('click', true, true);
		        save.dispatchEvent(event);
		        (window.URL || window.webkitURL).revokeObjectURL(save.href);
		    }

		    // for IE
		    else if ( !! window.ActiveXObject && document.execCommand)     {
		        var _window = window.open(fileURL, '_blank');
		        _window.document.close();
		        _window.document.execCommand('SaveAs', true, fileName || fileURL)
		        _window.close();
		    }
		}
	}
};

$(document).ready(function() {
      AvGen.init();
});