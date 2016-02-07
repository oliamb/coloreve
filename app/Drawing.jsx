import React from 'react';

export default class Drawing extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    // var className = event.target.getAttribute('class');
    // if (!className.match(/shape/)) {
    //   return;
    // }
    event.stopPropagation();
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var hex = Math.round(Math.random()*255).toString(16);
      color += ("00" + hex).substr(-2, 2) ; // padding 00
    }
    console.log('Will assign fill', color);
    event.target.setAttribute('fill', color);
  }

  render() {
    return <div className="canvas" onClick={this.handleClick.bind(this)}>
      <svg width="985px" height="861px" viewBox="0 0 985 861" version="1.1">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect id="Rectangle-23" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="-1" y="2" width="983" height="858"></rect>
              <rect id="Rectangle-6" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-345.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-2" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-330.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-3" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-315.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-4" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-300.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-5" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-285.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-6" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-270.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-7" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-255.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-8" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-240.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-9" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-225.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-10" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-210.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <rect id="Rectangle-6-copy-11" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(754.500000, 194.000000) rotate(-195.000000) translate(-754.500000, -194.000000) " x="563" y="187.5" width="383" height="13"></rect>
              <circle id="Oval-13" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" cx="754" cy="187.5" r="87"></circle>
              <rect id="Rectangle-18" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="191" y="721" width="10" height="58"></rect>
              <polygon id="Star-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(191.500000, 710.000000) rotate(-18.000000) translate(-191.500000, -710.000000) " points="191.499997 729.750775 172.03193 740 175.749999 718.291796 160 702.917961 181.765966 699.750774 191.499998 680 201.234035 699.750778 223 702.917977 207.249994 718.2918 210.968064 740 "></polygon>
              <rect id="Rectangle-5" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="574" y="242" width="50" height="123"></rect>
              <path d="M492.5,714.574083 C883.026245,714.574091 984,860 984,860 L1,860 C1,860 101.973755,714.574074 492.5,714.574083 Z" id="Triangle-2" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF"></path>
              <rect id="Rectangle-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="318" y="420" width="349" height="320"></rect>
              <polygon id="Triangle-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" points="492.5 242 712 431 273 431 "></polygon>
              <rect id="Rectangle-2" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="453" y="601" width="80" height="139"></rect>
              <rect id="Rectangle-3" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="353" y="483" width="71" height="71"></rect>
              <rect id="Rectangle-3" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="563" y="483" width="71" height="71"></rect>
              <path d="M164.65065,353.431037 C157.846271,361.475327 143.765989,367 127.5,367 C104.580182,367 86,356.030977 86,342.5 C86,341.566411 86.0884512,340.645017 86.260676,339.738582 L86.260676,339.738582 C83.8928226,339.910737 81.4681662,340 79,340 C52.4903307,340 31,329.70255 31,317 C31,304.29745 52.4903307,294 79,294 C84.34361,294 89.4832776,294.418399 94.2841032,295.190557 L94.2841032,295.190557 C96.8251341,282.705944 116.099646,273 139.5,273 C156.570315,273 171.445042,278.165067 179.229876,285.806023 C182.027767,285.280237 184.967521,285 188,285 C206.777682,285 222,295.745165 222,309 C222,318.456644 214.251703,326.635845 202.991984,330.546865 C202.610437,343.549125 188.657081,354 171.5,354 C169.147758,354 166.855735,353.80356 164.65065,353.431037 Z" id="Oval-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(126.500000, 320.000000) rotate(181.000000) translate(-126.500000, -320.000000) "></path>
              <path d="M396.390194,158.604772 C391.333182,142.671264 374.940983,131 355.5,131 C345.21069,131 335.77539,134.269294 328.422585,139.70947 L328.42258,139.709474 C322.444627,137.353253 315.460856,136 308,136 C288.3905,136 272.076734,145.348343 268.65865,157.685064 C265.379794,157.236035 261.98188,157 258.5,157 C231.161904,157 209,171.550745 209,189.5 C209,207.449255 231.161904,222 258.5,222 C263.066194,222 267.487982,221.594064 271.686218,220.834159 L271.686218,220.834159 C278.855085,228.770764 291.099506,234 305,234 C309.171207,234 313.193293,233.52913 316.973859,232.655531 L316.973859,232.655531 C322.842453,246.949472 336.76237,257 353,257 C373.064891,257 389.590721,241.653222 391.758902,221.916951 C411.457794,220.726748 427,206.891828 427,190 C427,174.456314 413.839651,161.501062 396.390208,158.604775 Z" id="Oval-7" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(318.000000, 194.000000) rotate(-181.000000) translate(-318.000000, -194.000000) "></path>
              <path d="M453.407718,344.588375 C453.140339,343.267228 453,341.900003 453,340.5 C453,340.220362 453.005599,339.942032 453.016691,339.665115 C453.009714,339.443902 453.004144,339.222196 453,339 C453.017952,339.000973 453.035897,339.001946 453.053835,339.002919 C453.820529,328.380022 462.681634,320 473.5,320 C482.608206,320 490.329046,325.940015 493,334.157524 C495.670954,325.940015 503.391794,320 512.5,320 C523.49544,320 532.469022,328.656594 532.977284,339.526319 C532.984855,339.525796 532.992427,339.525273 533,339.52475 C532.99692,339.630457 532.993462,339.736089 532.989629,339.841646 C532.996526,340.060252 533,340.27972 533,340.5 C533,342.047294 532.828578,343.55455 532.503689,345.003812 C527.84775,375.768963 493.189778,399 493.189778,399 C493.189778,399 457.669716,378.024354 453.407718,344.588375 Z" id="Oval-14" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF"></path>
              <rect id="Rectangle-18" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="142" y="736" width="10" height="58"></rect>
              <polygon id="Star-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(142.500000, 725.000000) rotate(-18.000000) translate(-142.500000, -725.000000) " points="142.499997 744.750775 123.03193 755 126.749999 733.291796 111 717.917961 132.765966 714.750774 142.499998 695 152.234035 714.750778 174 717.917977 158.249994 733.2918 161.968064 755 "></polygon>
              <rect id="Rectangle-18" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="232" y="721" width="10" height="58"></rect>
              <polygon id="Star-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(232.500000, 710.000000) rotate(-18.000000) translate(-232.500000, -710.000000) " points="232.499997 729.750775 213.03193 740 216.749999 718.291796 201 702.917961 222.765966 699.750774 232.499998 680 242.234035 699.750778 264 702.917977 248.249994 718.2918 251.968064 740 "></polygon>
              <rect id="Rectangle-18" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="125" y="774" width="10" height="58"></rect>
              <polygon id="Star-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(125.500000, 763.000000) rotate(-18.000000) translate(-125.500000, -763.000000) " points="125.499997 782.750775 106.03193 793 109.749999 771.291796 94 755.917961 115.765966 752.750774 125.499998 733 135.234035 752.750778 157 755.917977 141.249994 771.2918 144.968064 793 "></polygon>
              <rect id="Rectangle-18" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="182" y="774" width="10" height="58"></rect>
              <polygon id="Star-1" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" transform="translate(182.500000, 763.000000) rotate(-18.000000) translate(-182.500000, -763.000000) " points="182.499997 782.750775 163.03193 793 166.749999 771.291796 151 755.917961 172.765966 752.750774 182.499998 733 192.234035 752.750778 214 755.917977 198.249994 771.2918 201.968064 793 "></polygon>
          </g>
      </svg>
    </div>
  }
}
