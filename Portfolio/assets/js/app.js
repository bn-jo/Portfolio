"use strict";

// Header
// <li class="nav-item nav-item-hover"><a class="nav-link" href="research.html">Research</a></li>
//   <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
//  <li class="nav-item nav-item-hover"><a class="nav-link" href="https://hashnode.com/" target="_blank">Blogs</a></li>
let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html"> Ben Guetta </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>


   <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
   
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">About</a></li>
 


   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
   <div class="bike">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 0 650 400" preserveAspectRatio="xMinYMin meet">
     <rect/>
     <g>
       <g id="man-bike">
         <path id="Vector_2" opacity="0.1" d="M201.091 276.806L179.893 255.76L173.269 262.513L194.467 283.559L201.091 276.806Z" fill="black" />
         <path id="Vector_3" opacity="0.05" d="M269.455 177.344C269.455 177.344 326.601 189.531 325.92 197.189C325.238 204.847 268.194 187.328 268.194 187.328C268.194 187.328 264.731 181.519 269.455 177.344Z" fill="black" />
         <path id="Vector_4" opacity="0.1" d="M259.93 224.494C251.988 220.634 232.6 220.22 232.6 220.22L232.392 218.277L258.907 216.225L260.396 221.718C260.396 221.718 260.729 222.792 259.93 224.494Z" fill="black" />
         <path id="Vector_5" opacity="0.1" d="M202.149 253.613C201.27 254.287 200.833 254.677 200.833 254.677C200.833 254.677 184.95 260.17 184.95 245.688C184.95 245.688 185.719 245.278 186.935 244.594C188.164 246.607 189.885 248.269 191.934 249.423C193.983 250.576 196.292 251.181 198.639 251.181H200.322L202.149 253.613Z" fill="black" />
         <path id="Vector_6" d="M184.95 245.688C184.95 245.688 197.254 239.156 202.01 234.951C204.872 232.432 207.95 230.171 211.207 228.195L226.644 218.742L258.907 216.245L260.396 221.738C260.396 221.738 262.878 229.728 238.06 236.719C213.242 243.71 200.833 254.697 200.833 254.697C200.833 254.697 184.95 260.17 184.95 245.688Z" fill="#DB8B8B" />
         <path id="Vector_7" d="M185.198 242.442L172.044 251.181L210.562 283.64C210.562 283.64 216.22 280.145 213.242 276.15C213.242 276.15 203.315 267.66 202.819 255.675L199.841 251.68H198.158C195.313 251.681 192.537 250.792 190.216 249.137C187.894 247.482 186.141 245.143 185.198 242.442V242.442Z" fill="#E5E5E5" />
         <path id="Vector_8" d="M232.6 219.221C232.6 219.221 255.929 219.72 261.886 224.714L258.907 164.29H226.644L232.6 219.221Z" fill="#6A6567" />
         <path id="Vector_9" d="M201.091 276.806L179.893 255.76L173.269 262.513L194.467 283.559L201.091 276.806Z" fill="#1E1F21" />
         <path id="Vector_10" opacity="0.05" d="M232.6 218.971C232.6 218.971 255.929 219.471 261.886 224.464L258.907 164.04H226.644L232.6 218.971Z" fill="#535461" />
         <path id="Vector_11" opacity="0.05" d="M259.93 224.494C258.55 227.436 253.79 232.27 238.06 236.699C217.903 242.377 205.931 250.682 202.149 253.613C201.27 254.287 200.833 254.677 200.833 254.677C200.833 254.677 184.95 260.17 184.95 245.688C184.95 245.688 185.719 245.278 186.935 244.594C190.623 242.562 198.431 238.102 201.995 234.931C204.857 232.411 207.934 230.15 211.192 228.175L226.629 218.722L232.377 218.277L258.892 216.225L260.382 221.718C260.382 221.718 260.729 222.792 259.93 224.494Z" fill="black" />
         <path id="Vector_12" d="M251.343 182.247C251.343 182.247 309.74 180.25 310.931 187.845C312.122 195.441 252.534 192.24 252.534 192.24C252.534 192.24 247.769 187.441 251.343 182.247Z" fill="#1E1F21" />
         <path id="Vector_13" opacity="0.1" d="M204.07 212.619V219.576C200.635 220.025 197.12 220.31 193.74 220.419V212.619H204.07Z" fill="black" />
         <path id="Vector_14" d="M203.295 205.134C201.846 205.021 200.404 204.826 198.977 204.549C193.378 203.471 179.261 201.208 175.464 205.049C170.699 209.843 172.288 218.237 184.999 219.436C197.711 220.634 219.561 217.438 223.934 212.639C223.934 212.619 216.027 206.117 203.295 205.134Z" fill="#1E1F21" />
         <path id="Vector_15" d="M233.469 290.961L311.73 213.423L316.098 219.815L241.411 298.152L233.469 290.961Z" fill="#71575D" />
         <path id="Vector_16" d="M346.689 303.75L341.129 306.946L302.344 197.918L300.607 193.039L309.745 187.84L312.033 195.021L346.689 303.75Z" fill="#71575D" />
         <path id="Vector_17" d="M204.07 212.624H193.74V302.951H204.07V212.624Z" fill="#71575D" />
         <path id="Vector_18" d="M201.29 237.403L309.745 203.431L313.318 211.825L202.084 250.192L201.29 237.403Z" fill="#1E1F21" />
         <path id="Vector_19" opacity="0.1" d="M178.363 270.347L167.761 280.11C165.883 277.685 163.761 275.462 161.427 273.478L171.325 263.076C173.873 265.293 176.228 267.726 178.363 270.347V270.347Z" fill="black" />
         <path id="Vector_20" d="M252.931 203.431L307.357 184.644C307.357 184.644 316.892 185.843 313.313 193.838L258.495 210.222C258.495 210.222 250.157 211.021 252.931 203.431Z" fill="#1E1F21" />
         <path id="Vector_21" opacity="0.1" d="M231.479 313.743C238.499 313.743 244.19 308.017 244.19 300.954C244.19 293.891 238.499 288.165 231.479 288.165C224.458 288.165 218.767 293.891 218.767 300.954C218.767 308.017 224.458 313.743 231.479 313.743Z" fill="black" />
         <path id="Vector_22" opacity="0.1" d="M333.411 264.594C330.931 265.239 328.513 266.103 326.184 267.176L321.439 253.838C323.929 252.746 326.494 251.833 329.113 251.106L333.411 264.594Z" fill="black" />
         <path id="Vector_23" opacity="0.1" d="M191.556 307.546C191.556 310.609 191.32 313.667 190.851 316.694C186.086 316.35 181.162 315.85 176.338 315.351C177.41 309.413 177.276 303.318 175.946 297.433C180.646 296.434 185.446 295.481 190.132 294.617C191.081 298.86 191.559 303.196 191.556 307.546V307.546Z" fill="black" />
         <path id="Vector_24" d="M228.884 299.993L228.88 299.996C227.387 301.119 227.082 303.247 228.198 304.749L238.287 318.322C239.403 319.824 241.519 320.131 243.011 319.008L243.015 319.005C244.508 317.882 244.813 315.754 243.697 314.252L233.608 300.679C232.492 299.177 230.376 298.87 228.884 299.993Z" fill="#7F879C" />
         <path id="Vector_25" d="M289.682 123.341L288.5 138.377C288.364 140.282 288.389 142.194 288.575 144.095C288.729 145.778 288.575 148.724 286.937 153.218C284.834 158.96 283.747 165.027 283.725 171.146V188.26L272.309 186.262C272.309 186.262 272.805 162.292 270.82 158.297C268.835 154.302 272.309 118.846 272.309 118.846L289.682 123.341Z" fill="#DB8B8B" />
         <path id="Vector_26" d="M233.107 238.197L228.813 262.767C228.272 266.047 227.441 269.272 226.331 272.404C223.815 279.326 225.423 289.029 226.644 294.322C227.185 296.659 227.637 298.137 227.637 298.137L214.731 305.129L210.76 302.132V300.135L210.264 255.69C207.286 248.699 208.279 238.212 210.264 234.217C210.829 232.905 211.226 231.525 211.445 230.112C212.438 224.759 212.746 217.238 212.746 217.238C212.746 217.238 220.688 203.755 230.118 212.744C233.593 216.055 234.913 220.384 235.191 224.529C235.678 231.625 233.107 238.197 233.107 238.197Z" fill="#DB8B8B" />
         <path id="Vector_27" d="M134.549 302.951L196.917 237.403L198.907 252.589L137.726 308.944L134.549 302.951Z" fill="#71575D" />
         <path id="Vector_28" opacity="0.1" d="M235.191 224.514C228.307 228.629 216.33 229.793 211.445 230.097C212.438 224.744 212.746 217.223 212.746 217.223C212.746 217.223 220.688 203.74 230.118 212.729C233.593 216.04 234.913 220.37 235.191 224.514Z" fill="black" />
         <path id="Vector_29" opacity="0.05" d="M289.096 130.792L288.5 138.377C288.366 140.28 288.393 142.191 288.58 144.09C288.734 145.773 288.58 148.719 286.942 153.218C284.839 158.96 283.752 165.027 283.73 171.146V188.26L272.314 186.262C272.314 186.262 272.81 162.292 270.825 158.297C269.42 155.466 270.75 136.854 271.649 126.232C272.021 121.863 272.314 118.846 272.314 118.846L289.687 123.341L289.096 130.792Z" fill="black" />
         <path id="Vector_30" opacity="0.1" d="M254.177 156.499C253.944 158.831 253.944 160.295 253.944 160.295C253.944 160.295 242.527 169.783 223.169 155.301C203.811 140.819 186.439 144.814 186.439 144.814C186.439 144.814 186.642 143.655 187.054 141.818C188.424 138.996 189.913 137.823 189.913 137.823L251.958 149.808L254.177 156.499Z" fill="black" />
         <path id="Vector_31" opacity="0.05" d="M256.058 145.029C254.779 149.51 254.069 154.136 253.944 158.796C253.944 158.796 250.926 161.293 245.367 161.793C245.21 161.475 245.09 161.14 245.009 160.794C244.017 156.3 236.571 148.31 236.571 148.31C231.608 143.815 230.615 135.825 230.615 135.825L222.425 111.605L219.695 109.358C219.695 109.358 231.111 100.37 241.038 107.86C250.966 115.351 247.987 131.331 247.987 131.331L249.973 136.824C252.033 138.572 254.127 141.653 256.058 145.029Z" fill="black" />
         <path id="Vector_32" opacity="0.1" d="M312.033 195.021L302.344 197.918L300.607 193.039L309.745 187.84L312.033 195.021Z" fill="black" />
         <path id="Vector_33" d="M296.373 103.84C295.077 114.003 294.645 126.811 294.645 126.811C283.229 135.8 274.295 124.315 274.295 124.315C263.514 127.226 258.446 136.719 256.058 145.004C254.779 149.485 254.069 154.111 253.944 158.772C253.944 158.772 250.926 161.268 245.367 161.768C240.11 162.212 232.575 160.834 223.169 153.778C203.811 139.296 186.439 143.291 186.439 143.291C186.439 143.291 189.913 123.316 197.855 117.323C205.797 111.331 211.753 103.84 221.68 80.8689C231.608 57.8976 251.958 63.3908 251.958 63.3908C251.958 63.3908 252.951 58.8964 271.316 63.3908C275.79 64.5703 279.93 66.777 283.413 69.8377C293.236 78.1473 298.001 91.0362 296.373 103.84Z" fill="black" />
         <path id="Vector_34" d="M251.958 212.23C246.68 215.058 241.692 218.403 237.068 222.217C229.126 228.709 209.271 229.208 209.271 229.208V221.718C209.768 212.729 201.33 202.742 189.913 174.777C182.622 156.919 184.642 146.811 187.054 141.818C188.424 138.996 189.913 137.823 189.913 137.823L251.958 149.808L254.177 156.499L258.907 170.782C258.907 170.782 241.535 171.78 238.557 173.278C235.578 174.777 237.564 188.26 237.564 188.26C234.586 202.242 251.958 212.23 251.958 212.23Z" fill="#6A6567" />
         <path id="Vector_35" d="M232.278 313.743C239.298 313.743 244.989 308.017 244.989 300.954C244.989 293.891 239.298 288.165 232.278 288.165C225.257 288.165 219.566 293.891 219.566 300.954C219.566 308.017 225.257 313.743 232.278 313.743Z" fill="#1E1F21" />
         <path id="Vector_36" d="M277.953 74.6517C277.928 75.3159 277.873 76.0549 277.784 76.8789C276.791 85.8677 275.798 84.8689 264.879 86.8664C258.088 88.1099 254.559 82.402 252.862 77.9076C252.247 76.2795 251.784 74.5978 251.477 72.8839L275.302 68.8889C275.302 68.8889 278.156 68.0849 277.953 74.6517Z" fill="#DB8B8B" />
         <path id="Vector_37" d="M281.244 63.4157C281.244 68.0512 279.413 72.4969 276.155 75.7747C272.897 79.0524 268.478 80.8939 263.871 80.8939C259.263 80.8939 254.845 79.0524 251.587 75.7747C248.329 72.4969 246.498 68.0512 246.498 63.4157C246.498 63.1261 246.498 62.8365 246.498 62.5468C246.613 57.9113 248.553 53.5115 251.892 50.3152C255.231 47.1188 259.695 45.3879 264.303 45.5031C268.91 45.6184 273.284 47.5703 276.461 50.9296C279.638 54.2888 281.358 58.7802 281.244 63.4157V63.4157Z" fill="#DB8B8B" />
         <path id="Vector_38" opacity="0.1" d="M289.682 123.341L289.096 130.792C280.459 133.288 274.295 125.338 274.295 125.338C273.394 125.581 272.508 125.88 271.644 126.232C272.016 121.863 272.309 118.846 272.309 118.846L289.682 123.341Z" fill="black" />
         <path id="Vector_39" opacity="0.1" d="M242.527 87.8851L249.477 115.351C249.477 115.351 228.133 118.846 223.666 115.351C219.199 111.855 210.76 110.856 210.76 110.856C210.76 110.856 219.695 84.8889 224.659 81.8926C229.622 78.8964 242.527 87.8851 242.527 87.8851Z" fill="black" />
         <path id="Vector_40" opacity="0.1" d="M227.637 298.122L214.731 305.114L210.76 302.117V300.12C215.22 299.801 219.552 298.486 223.442 296.27C224.634 295.59 225.755 294.921 226.654 294.332C227.175 296.644 227.637 298.122 227.637 298.122Z" fill="black" />
         <path id="Vector_41" opacity="0.05" d="M200.089 117.099C200.089 117.099 212.994 120.594 216.965 129.583C220.936 138.572 231.677 140.215 231.677 140.215" fill="black" />
         <path id="Vector_42" d="M221.184 108.859L232.104 135.326C232.104 135.326 233.097 143.316 238.06 147.81C238.06 147.81 245.506 155.8 246.498 160.295C247.491 164.789 261.389 176.774 261.389 176.774C261.389 176.774 274.295 188.759 275.287 193.253C275.287 193.253 287.2 196.749 285.711 203.74C285.711 203.74 294.645 194.752 285.711 186.262C276.776 177.773 264.864 160.295 264.864 160.295C264.864 160.295 257.915 141.818 251.462 136.325L249.477 130.831C249.477 130.831 252.455 114.851 242.527 107.361C232.6 99.8702 221.184 108.859 221.184 108.859Z" fill="#DB8B8B" />
         <path id="Vector_43" d="M248.732 314.851H218.95V324.34H248.732V314.851Z" fill="#1E1F21" />
         <path id="Vector_44" d="M242.527 86.8864L249.477 114.352C249.477 114.352 228.133 117.848 223.666 114.352C219.199 110.856 210.76 109.858 210.76 109.858C210.76 109.858 219.695 83.8901 224.659 80.8939C229.622 77.8976 242.527 86.8864 242.527 86.8864Z" fill="black" />
         <path id="Vector_45" d="M223.423 297.243C226.088 295.745 228.426 294.247 228.629 293.628C228.629 293.628 235.355 300.769 241.346 302.986C243.361 303.735 245.289 304.699 247.099 305.863C249.472 307.361 252.857 309.124 255.929 309.124C255.929 309.124 262.878 315.116 249.477 316.115C236.075 317.114 204.804 313.618 204.804 313.618L206.79 301.134C212.591 301.476 218.366 300.125 223.423 297.243Z" fill="#E5E5E5" />
         <path id="Vector_46" d="M137.329 307.361C137.329 307.361 220.757 285.388 227.508 293.773C234.258 302.157 241.411 313.353 220.375 317.348C199.339 321.343 135.755 310.552 135.755 310.552L137.329 307.361Z" fill="#71575D" />
         <path id="Vector_47" opacity="0.1" d="M248.732 314.851H218.95V324.34H248.732V314.851Z" fill="#1E1F21" />
       </g>
       <g id="left-wheel">
         <path id="Vector_48" d="M135.686 358.047L132.574 309.139L132.509 309.034L129.372 310.132L114.938 352.504L91.9815 336.13L128.548 309.458L128.583 309.353L128.792 309.278L131.149 307.556L92.8104 285.928L83.4193 296.315L84.9084 306.052L128.995 306.861V307.86L84.0844 307.051L82.3868 295.995L95.2426 281.783L114.477 259.211L114.819 260.145L118.889 255.65L134.008 258.377V257.773L135.001 257.803V258.557L157.516 262.612L136.525 304.864L133.462 307.096V307.346V307.625L182.006 290.607L176.244 336.155L135.046 309.753L133.596 308.934L157.888 348.325L135.686 358.047ZM133.701 310.936L136.604 356.569L156.483 347.89L133.701 310.936ZM93.7039 336.12L114.447 350.916L128.017 311.096L93.7039 336.12ZM134.564 308.325L135.602 308.909L175.484 334.477L180.845 292.095L134.564 308.325ZM131.04 304.729L132.286 306.752L132.504 306.592L133.993 259.386L119.232 256.729L115.181 261.223L131.04 304.729ZM93.6046 285.223L130.752 306.197L130.107 305.134L114.432 262.052L95.9722 282.462L93.6046 285.223ZM135.001 259.561L133.512 305.863L135.755 304.225L156.062 263.366L135.001 259.561Z" fill="#535461" />
         <path id="Vector_49" d="M132.956 313.743C136.468 313.743 139.314 310.879 139.314 307.346C139.314 303.813 136.468 300.949 132.956 300.949C129.444 300.949 126.598 303.813 126.598 307.346C126.598 310.879 129.444 313.743 132.956 313.743Z" fill="#1E1F21" />
         <path id="Vector_50" d="M190.132 294.607C188.141 285.708 184.111 277.401 178.363 270.347C176.229 267.726 173.876 265.293 171.33 263.076C161.538 254.571 149.217 249.578 136.3 248.88C123.383 248.181 110.601 251.818 99.9599 259.218C89.3191 266.619 81.4219 277.365 77.5077 289.769C73.5935 302.173 73.8838 315.534 78.3331 327.754C82.7824 339.975 91.1389 350.363 102.091 357.288C113.043 364.214 125.971 367.285 138.845 366.02C151.72 364.754 163.812 359.224 173.225 350.296C182.637 341.369 188.837 329.55 190.851 316.694C191.32 313.667 191.556 310.609 191.556 307.546C191.56 303.193 191.082 298.853 190.132 294.607ZM132.956 351.71C123.906 351.701 115.079 348.887 107.675 343.653C100.27 338.418 94.648 331.016 91.5724 322.453C88.4968 313.89 88.1171 304.582 90.4849 295.795C92.8527 287.007 97.8531 279.167 104.806 273.339C111.759 267.512 120.328 263.98 129.346 263.224C138.365 262.468 147.396 264.526 155.211 269.116C163.027 273.706 169.247 280.606 173.027 288.879C176.807 297.151 177.963 306.394 176.338 315.351C174.476 325.56 169.116 334.789 161.19 341.432C153.263 348.075 143.273 351.713 132.956 351.71Z" fill="#1E1F21" />
       </g>
       <g id="right-wheel">
         <path id="Vector_51" d="M347.23 358.247L344.122 309.358L344.058 309.253L340.921 310.352L326.482 352.704L303.525 336.325L340.102 309.653L340.137 309.548L340.345 309.473L342.703 307.75L304.364 286.122L294.968 296.509L296.457 306.247L340.534 307.036V308.035L295.623 307.226L293.935 296.185L306.786 281.978L326.005 259.421L326.348 260.355L330.418 255.86L345.577 258.592V257.988L346.569 258.017V258.772L369.084 262.826L348.073 305.099L345.011 307.331V307.581V307.86L393.56 290.841L387.797 336.389L346.599 309.987L345.15 309.169L369.442 348.564L347.23 358.247ZM345.244 311.136L348.148 356.769L368.027 348.09L345.244 311.136ZM305.252 336.325L325.995 351.121L339.566 311.301L305.252 336.325ZM346.113 308.529L347.15 309.114L387.033 334.682L392.393 292.3L346.113 308.529ZM342.589 304.934L343.835 306.956L344.053 306.796L345.542 259.591L330.78 256.924L326.73 261.418L342.589 304.934ZM305.168 285.433L342.316 306.407L341.67 305.343L325.995 262.262L307.531 282.677L305.168 285.433ZM346.55 259.77L345.061 306.057L347.304 304.419L367.61 263.561L346.55 259.77Z" fill="#535461" />
         <path id="Vector_52" d="M344.505 313.943C348.016 313.943 350.863 311.079 350.863 307.546C350.863 304.013 348.016 301.149 344.505 301.149C340.993 301.149 338.146 304.013 338.146 307.546C338.146 311.079 340.993 313.943 344.505 313.943Z" fill="#1E1F21" />
         <path id="Vector_53" d="M344.703 248.994C339.435 248.988 334.191 249.7 329.113 251.111C326.494 251.838 323.929 252.751 321.439 253.843C308.171 259.629 297.508 270.161 291.512 283.4C285.516 296.639 284.614 311.645 288.979 325.515C293.345 339.385 302.668 351.133 315.146 358.486C327.624 365.84 342.369 368.276 356.529 365.324C370.689 362.372 383.257 354.242 391.803 342.505C400.349 330.769 404.265 316.261 402.793 301.788C401.321 287.315 394.566 273.905 383.835 264.153C373.104 254.401 359.159 249 344.698 248.994H344.703ZM344.505 351.91C334.438 351.906 324.676 348.438 316.839 342.081C309.002 335.724 303.562 326.862 301.423 316.965C299.284 307.069 300.574 296.734 305.079 287.677C309.584 278.62 317.033 271.386 326.189 267.176C328.518 266.103 330.936 265.24 333.416 264.594C339.478 263.011 345.805 262.745 351.977 263.814C358.148 264.883 364.023 267.262 369.21 270.792C374.397 274.323 378.777 278.925 382.058 284.291C385.34 289.657 387.448 295.665 388.242 301.915C389.036 308.165 388.498 314.513 386.664 320.537C384.829 326.561 381.741 332.123 377.603 336.853C373.466 341.583 368.375 345.372 362.669 347.968C356.962 350.564 350.772 351.908 344.51 351.91H344.505Z" fill="#1E1F21" />
       </g>
       <path id="hat" d="M233.931 52.6043C234.988 55.9401 240.066 56.045 242.671 58.5019C244.026 59.7803 244.657 61.6679 246.146 62.8065C248.216 64.3945 251.204 64.045 253.839 63.6654C259.146 62.9064 264.844 62.4519 269.629 64.7541C271.326 65.568 272.85 66.7066 274.622 67.3708C276.394 68.035 278.593 68.1149 280.032 66.9363C281.184 65.9925 281.606 64.4395 282.648 63.4008C283.457 62.5818 284.584 62.1224 285.507 61.4033C287.532 59.8652 288.406 57.3583 288.982 54.9613C290.173 50.0275 290.516 44.7091 288.485 40.03C286.455 35.3508 281.571 31.5406 276.24 31.7853C274.607 31.8602 273.014 32.2846 271.386 32.4644C267.142 32.8989 262.948 31.4657 258.689 31.221C257.454 31.0697 256.2 31.2417 255.051 31.7204C254.184 32.2052 253.436 32.8792 252.862 33.6929C250.912 36.2624 249.577 39.2494 248.96 42.422C248.464 44.814 248.439 46.9813 245.525 47.3508C242.215 47.7903 231.692 45.5481 233.931 52.6043Z" fill="#472727" />
     </g>
     <defs>
       <linearGradient id="paint0_linear" x1="432.641" y1="56.6686" x2="44.1018" y2="338.225" gradientUnits="userSpaceOnUse">
         <stop offset="0.0001" stop-color="#490DF3" />
         <stop offset="1" stop-color="#3B49C6" stop-opacity="0.05" />
       </linearGradient>
     </defs>
   </svg>
 </div>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->

     
      
      


      </div>
      <p class="tag" >Programming isn’t about what you know, it’s about what you can figure out.  </p>
    </div>

    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
          <style>svg#freepik_stories-smiley-face:not(.animated) .animable {opacity: 0;}svg#freepik_stories-smiley-face.animated #freepik--background-complete--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Shadow--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Character--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown,1.5s Infinite  linear floating;animation-delay: 0.2s,1.2s;opacity: 0}            @keyframes fadeIn {                0% {                    opacity: 0;                }                100% {                    opacity: 1;                }            }                    @keyframes slideDown {                0% {                    opacity: 0;                    transform: translateY(-30px);                }                100% {                    opacity: 1;                    transform: translateY(0);                }            }                    @keyframes floating {                0% {                    opacity: 1;                    transform: translateY(0px);                }                50% {                    transform: translateY(-10px);                }                100% {                    opacity: 1;                    transform: translateY(0px);                }            }        </style>
              <svg xmlns="http://www.w3.org/2000/svg" id="galinv" width="300" height="294" baseProfile="tiny" class="svgmate" version="1" viewBox="53 100 719 594"><style>@keyframes shipy{0%{transform:translateY(0)}45%{transform:translateY(60px)}}@keyframes ufo{0%{transform:rotate(0);animation-timing-function:cubic-bezier(.34,.15,.61,1)}20%{transform:rotate(-5deg);animation-timing-function:cubic-bezier(.34,.15,.61,1)}65%{transform:rotate(6deg);animation-timing-function:linear}}@keyframes ufowin{0%,to{transform:translateX(0) translateY(0)}50%{transform:translateX(33px) translateY(-4px)}}@keyframes ufowinscale{0%,50%,to{transform:scaleX(1)}25%,75%{transform:scaleX(1.2)}}@keyframes beamfront{0%,to{transform:scaleX(1) skewX(0) skewY(0)}45%{transform:scaleX(1.6) skewX(2deg) skewY(1.4deg) rotate(-4deg) translateX(-8px)}0%,25%,50%,75%,to{opacity:.5}12.5%,37.5%,62%,87.5%{opacity:.9}}@keyframes beamfront2{0%,to{transform:scaleX(1) skewX(0) skewY(0)}45%{transform:scaleX(1.6) skewX(1deg) rotate(-10deg) translateX(-10px) translateY(-2px)}0%,25%,50%,75%,to{opacity:.9}12.5%,37.5%,62%,87.5%{opacity:.5}}@keyframes moonwalk{0%{transform:rotate(0deg)}10.6%{transform:rotate(-30deg)}to{transform:rotate(360deg)}}@keyframes starblink{0%{transform:rotate(0deg) scale(0);opacity:0}5.3%{transform:rotate(45deg) scale(1.1)}10.6%{transform:rotate(90deg) scale(0);opacity:1}.05%{opacity:1}11%,to{opacity:0}}@keyframes shootingstar{2.27%{stroke-dashoffset:0}4.54%,to{stroke-dashoffset:-200}}@keyframes shootingstar22{2.27%{stroke-dashoffset:0}4.54%,to{stroke-dashoffset:-500}}@keyframes shootingstar6{2.27%{stroke-dashoffset:0}4.54%,to{stroke-dashoffset:-220}}@keyframes clouds{50%{transform:translateX(-50px)}to{transform:translateX(0)}}#galinv.svgmate .shipy{animation-name:shipy;animation-timing-function:ease-in-out}#galinv.svgmate #Window,#galinv.svgmate .shipy,#galinv.svgmate .ufo{animation-iteration-count:infinite;animation-duration:2.68s}#galinv.svgmate .ufo{transform-origin:312.8px 175.2px;animation-name:ufo}#galinv.svgmate #Window{animation-name:ufowin;animation-timing-function:ease-in-out}#galinv.svgmate .beams,#galinv.svgmate .beams2,#galinv.svgmate .themoon,#galinv.svgmate .winscale{animation-name:ufowinscale;animation-iteration-count:infinite;animation-duration:2.68s;animation-timing-function:ease-in-out;transform-origin:312.8px}#galinv.svgmate .beams,#galinv.svgmate .beams2,#galinv.svgmate .themoon{animation-name:beamfront;transform-origin:312.8px 175.2px}#galinv.svgmate .beams2,#galinv.svgmate .themoon{animation-name:beamfront2;transform-origin:312.8px 185.2px}#galinv.svgmate .themoon{animation-name:moonwalk;animation-duration:2.64s;animation-timing-function:ease-out;transform-origin:626px 192px}#galinv.svgmate .star1,#galinv.svgmate .star2,#galinv.svgmate .star3,#galinv.svgmate .star4,#galinv.svgmate .star5,#galinv.svgmate .star6{animation-name:starblink;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:ease-in-out;transform-origin:441.25px 278.7px;animation-delay:0s;opacity:0}#galinv.svgmate .star2,#galinv.svgmate .star3,#galinv.svgmate .star4,#galinv.svgmate .star5,#galinv.svgmate .star6{transform-origin:125.8px 315.75px;animation-delay:.28s}#galinv.svgmate .star3,#galinv.svgmate .star4,#galinv.svgmate .star5,#galinv.svgmate .star6{transform-origin:713.65px 178.1px;animation-delay:.84s}#galinv.svgmate .star4,#galinv.svgmate .star5,#galinv.svgmate .star6{transform-origin:732px 418.85px;animation-delay:1.36s}#galinv.svgmate .star5,#galinv.svgmate .star6{transform-origin:168.3px 194.7px;animation-delay:1.64s}#galinv.svgmate .star6{transform-origin:552.1px 174.7px;animation-delay:2.16s}#galinv.svgmate #LaserLine_1,#galinv.svgmate #LaserLine_2,#galinv.svgmate #LaserLine_3,#galinv.svgmate #LaserLine_4,#galinv.svgmate #LaserLine_5{animation-name:shootingstar;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:linear;stroke-dasharray:200;stroke-dashoffset:200;animation-fill-mode:forwards;animation-delay:.12s}#galinv.svgmate #LaserLine_2,#galinv.svgmate #LaserLine_3,#galinv.svgmate #LaserLine_4,#galinv.svgmate #LaserLine_5{animation-delay:.24s}#galinv.svgmate #LaserLine_3,#galinv.svgmate #LaserLine_4,#galinv.svgmate #LaserLine_5{animation-delay:.36s}#galinv.svgmate #LaserLine_4,#galinv.svgmate #LaserLine_5{animation-delay:.48s}#galinv.svgmate #LaserLine_5{animation-delay:.6s}#galinv.svgmate #LaserLine_10,#galinv.svgmate #LaserLine_6,#galinv.svgmate #LaserLine_7,#galinv.svgmate #LaserLine_8,#galinv.svgmate #LaserLine_9{animation-name:shootingstar6;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:linear;stroke-dasharray:220;stroke-dashoffset:220;animation-fill-mode:forwards;animation-delay:.72s}#galinv.svgmate #LaserLine_10,#galinv.svgmate #LaserLine_7,#galinv.svgmate #LaserLine_8,#galinv.svgmate #LaserLine_9{animation-name:shootingstar;stroke-dasharray:200;stroke-dashoffset:200;animation-delay:.84s}#galinv.svgmate #LaserLine_10,#galinv.svgmate #LaserLine_8,#galinv.svgmate #LaserLine_9{animation-delay:.96s}#galinv.svgmate #LaserLine_10,#galinv.svgmate #LaserLine_9{animation-delay:1.08s}#galinv.svgmate #LaserLine_10{animation-delay:1.2s}#galinv.svgmate #LaserLine_11,#galinv.svgmate #LaserLine_12,#galinv.svgmate #LaserLine_13,#galinv.svgmate #LaserLine_14,#galinv.svgmate #LaserLine_15,#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-name:shootingstar;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:linear;stroke-dasharray:200;stroke-dashoffset:200;animation-fill-mode:forwards;animation-delay:1.32s}#galinv.svgmate #LaserLine_12,#galinv.svgmate #LaserLine_13,#galinv.svgmate #LaserLine_14,#galinv.svgmate #LaserLine_15,#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-delay:1.44s}#galinv.svgmate #LaserLine_13,#galinv.svgmate #LaserLine_14,#galinv.svgmate #LaserLine_15,#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-delay:1.56s}#galinv.svgmate #LaserLine_14,#galinv.svgmate #LaserLine_15,#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-delay:1.68s}#galinv.svgmate #LaserLine_15,#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-delay:1.8s}#galinv.svgmate #LaserLine_16,#galinv.svgmate #LaserLine_17{animation-delay:1.92s}#galinv.svgmate #LaserLine_17{animation-delay:2.02s}#galinv.svgmate #LaserLine_18,#galinv.svgmate #LaserLine_19,#galinv.svgmate #LaserLine_20,#galinv.svgmate #LaserLine_21,#galinv.svgmate #LaserLine_22,#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-name:shootingstar;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:linear;stroke-dasharray:200;stroke-dashoffset:200;animation-fill-mode:forwards;animation-delay:2.14s}#galinv.svgmate #LaserLine_19,#galinv.svgmate #LaserLine_20,#galinv.svgmate #LaserLine_21,#galinv.svgmate #LaserLine_22,#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-delay:2.26s}#galinv.svgmate #LaserLine_20,#galinv.svgmate #LaserLine_21,#galinv.svgmate #LaserLine_22,#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-delay:2.38s}#galinv.svgmate #LaserLine_21,#galinv.svgmate #LaserLine_22,#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-delay:2.5s}#galinv.svgmate #LaserLine_22,#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-name:shootingstar22;stroke-dasharray:500;stroke-dashoffset:500;animation-delay:2.64s}#galinv.svgmate #LaserLine_23,#galinv.svgmate #LaserLine_24{animation-name:shootingstar;stroke-dasharray:200;stroke-dashoffset:200;animation-delay:2.26s}#galinv.svgmate #LaserLine_24{animation-delay:2.64s}#galinv.svgmate #Cloud1,#galinv.svgmate #Cloud2{animation-name:clouds;animation-iteration-count:infinite;animation-duration:2.64s;animation-timing-function:ease-in-out;transform-origin:200px 425px}#galinv.svgmate #Cloud2{transform-origin:450px 385px}</style><g id="Background_Gray" fill="#F3F3F3"><path id="Cloud1" d="M217 415c-3 0-6 1-8 3a18 18 0 1 0-18 23h26c7 0 13-6 13-13s-6-13-13-13z"/><path id="Cloud2" d="M478 384c-3 0-6 2-7 4a12 12 0 0 0-21-6c-2-8-8-13-16-13a17 17 0 1 0 0 34h44c5 0 9-4 9-10 0-4-4-9-9-9z"/><path id="Building_Right" d="M686 610c0-2 2-3 3-3h26c2 0 3 1 3 3v49c0 2-1 3-3 3h-26c-1 0-3-1-3-3v-49z"/><path id="Building_Left" d="M272 354c0-2-1-3-3-3h-26c-1 0-2 1-2 3v102c0 8-5 9-8 9h-37c-2 0-3 2-3 3v193c0 1 1 3 3 3h73c2 0 3-2 3-3v-1-306z"/></g><g id="EXTRAS_Bubbles"><g id="Cross_1" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star1"><path d="M436 272l11 16M449 274l-16 11"/></g><g id="Cross_2" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star2"><path d="M124 308l11 16M138 311l-16 10"/></g><g id="Cross_3" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star3"><path d="M708 170l11 16M722 173l-16 11"/></g><g id="Cross_4" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star4"><path d="M726 411l12 16M740 413l-16 11"/></g><g id="Cross_5" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star5"><path d="M160 190l17 9M173 186l-9 17"/></g><g id="Cross_6" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" class="star6"><path d="M542 175h20M553 165l-1 19"/></g><path id="LaserLine_1" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M651 165l83 82"/><path id="LaserLine_2" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M230 272l84 82"/><path id="LaserLine_3" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M36 215l83 82"/><path id="LaserLine_4" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M507 137l84 82"/><path id="LaserLine_5" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M684 211l84 82"/><path id="LaserLine_6" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M363 195l129 158"/><path id="LaserLine_7" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M583 224l131 130"/><path id="LaserLine_8" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29 442l83 82"/><path id="LaserLine_9" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M122 100l57 56"/><path id="LaserLine_10" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M223 316l101 100"/><path id="LaserLine_11" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M412 267l95 102"/><path id="LaserLine_12" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M518 178l62 61"/><path id="LaserLine_13" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M672 450l83 82"/><path id="LaserLine_14" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M255 169l131 131"/><path id="LaserLine_15" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M146 283l96 90"/><path id="LaserLine_16" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M78 527l83 82"/><path id="LaserLine_17" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M559 224l45 44"/><path id="LaserLine_18" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M363 259l84 80"/><path id="LaserLine_19" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M151 293l50 49"/><path id="LaserLine_20" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M239 146l131 130"/><path id="LaserLine_21" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M436 177l94 103"/><path id="LaserLine_22" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M14 178l225 204"/><path id="LaserLine_23" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M417 312l90 99"/><path id="LaserLine_24" fill="none" stroke="#FF0385" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" d="M63 290l75 71"/></g><g id="BUILDING_1"><g id="_x31_BUILDING_LINES"><path id="FRONT:_MainPlane" fill="#FFF" d="M279 538v125H174V539l52-30z"/><path id="Side_Plane_-_GRAY" fill="#ECECEC" d="M375 663V539l-69-33-80-1 53 33v125h96"/><path id="Side_-_Horizontal" fill="#FCFCFC" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M279 577h96v6h-96z"/><path id="Building_Lines_-_Vertical_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M174 539v123"/><path id="Building_Lines_-_Vertical" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M279 662V539"/><path id="Building_Lines_-_Horizontal" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M375 628H175"/><path id="FRONT:_Building_Lines_-_Horizontal" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M279 621H175"/><path id="SIDE:_Building_Lines_-_Horizontal_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M287 621h-2"/><path id="SIDE:_Building_Lines_-_Horizontal_2_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M375 621h-86"/><path id="SIDE:_Building_Lines_-_Horizontal" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M375 539h-96"/><path id="Building_Lines_-_Roof_Line2" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M327 516l48 22"/><path id="Building_Lines_-_Roof_Line1" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M229 506h77l19 8"/><path id="FRONT:_1Builind_Horizonal_Lines_1_" fill="#FCFCFC" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M208 577h71c2 0 3 1 3 3s-1 3-3 3H174c-2 0-3-1-3-3s1-3 3-3h30"/><path id="SIDE:_Vertical_Line" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M375 663V538"/><path id="Chimny" fill="#FCFCFC" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M290 521l-8-4v-21h8z"/><path id="Roof_Arch" fill="#FFF" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M282 533l-53-27h-7l-52 28c-2 1-2 2-1 4 0 1 2 2 4 1l53-28 53 27c2 1 3 0 4-1s1-3-1-4z"/></g><g id="ROW_1_1_"><path id="Door" fill="#ECECEC" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M211 662l-1 1h-12l-1-1v-21l1-1h12l1 1v21z"/><g id="Door_2"><path id="Door_1_" fill="#ECECEC" d="M255 662l-1 1h-13l-1-1v-21l1-1h13l1 1v21z"/><g id="Door_Dashed" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M240 648v-1M240 644v-3l1-1h13l1 1v21l-1 1h-13l-1-1v-11"/></g></g></g><g id="ROW_2_1_"><g id="Row2:_Window_Pink"><path id="Wind:_Glass_1_" fill="#ECECEC" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M195 612h-14v-22l1-1h12l1 1v22z"/><g id="Wind:_AirVent_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M195 608h-6M185 608h-4"/></g><path id="Wind:Bench" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M198 612h-21"/><path id="PINK_-_70_x25_" fill="#FF0385" d="M198 612h-2v-22l-2-1h-13l-1 1v22h-3-1l1 1h21l1-1h-1z"/></g><g id="Row2:_Wind" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Bench" fill="none" stroke="#000" d="M224 612h-21"/><path id="Wind:_Glass" fill="#ECECEC" stroke="#020202" d="M221 607h-15v-17l1-1h13l1 1v17z"/><path id="Wind:_AirVent" fill="none" stroke="#020202" d="M206 607h15v4l-1 1h-13l-1-1v-4z"/></g><g id="Row2:_Wind_Long" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Bench_1_" fill="none" stroke="#000" d="M273 612h-43"/><path id="Wind:_Glass_2_" fill="#ECECEC" stroke="#020202" d="M272 607h-40v-17l1-1h38l1 1v17z"/><path id="Wind:_AirVent_2_" fill="none" stroke="#020202" d="M232 607h40v4l-1 1h-38l-1-1v-4z"/></g></g><g id="ROW_3_1_"><g id="Row3:_Wind" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Glass_3_" fill="#ECECEC" stroke="#020202" d="M195 565l-1 1h-12l-1-1v-20l1-1h12l1 1v20z"/><path id="Wind:_Bench_2_" fill="none" stroke="#000" d="M198 567h-21"/><g id="Wind:Frame" fill="none" stroke="#020202"><path d="M181 554h14M188 554v12"/></g></g><g id="Row3:_Wind_Pink"><path id="Wind:_Glass_4_" fill="#ECECEC" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M221 565l-1 1h-13l-1-1v-20l1-1h13l1 1v20z"/><path id="Wind:_Bench_3_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M224 567h-21"/><g id="Wind:Frame_1_" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M206 554h15M214 554v12"/></g><path id="Row3:_Pink_-_70_x25_" fill="#FF0385" d="M224 566h-2v-21l-2-2h-13l-2 2v21h-2l-1 1 1 1h21l1-1-1-1z"/></g><g id="Row3:_Wind_2_" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Glass_5_" fill="#ECECEC" stroke="#020202" d="M248 565l-1 1h-13l-1-1v-20l1-1h13l1 1v20z"/><path id="Wind:_Bench_4_" fill="none" stroke="#000" d="M251 567h-21"/><g id="Wind:Frame_2_" fill="none" stroke="#020202"><path d="M233 554h15M240 554v12"/></g></g><g id="Row3:_Wind_3_" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Glass_6_" fill="#ECECEC" stroke="#020202" d="M273 565l-1 1h-13l-1-1v-20l1-1h13l1 1v20z"/><path id="Wind:_Bench_5_" fill="none" stroke="#000" d="M276 567h-21"/><g id="Wind:Frame_3_" fill="none" stroke="#020202"><path d="M258 554h15M265 554v12"/></g></g></g></g><g id="Beam_Back" class="shipy"><path id="Beam_2_2_" fill="#FF1B92" d="M304 230l-83 560 309-12-195-552z" class="beams2"/></g><g id="BUILDING_2"><g id="Building_Structure"><path id="Building_MainPlane" fill="#FFF" d="M336 474h118v189H336z"/><path id="_x32__-_Building_Side_Plane" fill="#ECECEC" d="M454 470h33v193h-33z"/><g id="BUILDING_LNES" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="_x32_Building_Horizontal_Line_1_" d="M365 604h122"/><path id="_x32_Building_Horizontal_Line" d="M336 604h23"/><path id="_x32_Building_Vertical_Line" d="M454 503v160"/><path id="_x32_Building_Vertical_Line_2_" d="M454 503v160"/><path id="_x32_Building_Vertical_Line_1_" d="M454 474v22"/><path id="_x32_Building_Vertical_Line_3_" d="M487 474v189"/><path id="_x32_Building_Vertical_Line_4_" d="M336 474v189"/></g><g id="Horizontal_Middle" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path fill="#ECECEC" d="M494 557c0 2-1 4-4 4H367c-2 0-4-2-4-4s2-4 4-4h123c3 0 4 2 4 4z"/><path fill="#FCFCFC" d="M461 557c0 2-2 4-4 4H334c-2 0-4-2-4-4s2-4 4-4h123c2 0 4 2 4 4z"/></g><g id="Horizontal_Top" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path fill="#ECECEC" d="M494 470c0 2-1 4-4 4H367c-2 0-4-2-4-4s2-4 4-4h123c3 0 4 2 4 4z"/><path fill="#FCFCFC" d="M461 470c0 2-2 4-4 4H334c-2 0-4-2-4-4s2-4 4-4h123c2 0 4 2 4 4z"/></g><g id="Horizontal_Top_Top" fill="#FCFCFC" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path d="M498 464c0 2-1 3-3 3H363c-2 0-3-1-3-3 0-1 1-2 3-2h132c2 0 3 1 3 2z"/><path stroke-linecap="round" d="M398 462h63l3 2c0 2-2 3-3 3H328c-2 0-3-1-3-3 0-1 1-2 3-2h65"/></g></g><g id="ROW_4" stroke="#000" stroke-miterlimit="10" stroke-width="2"><g id="Row4:_Window_2_"><path id="Wind:_Bench_18_" fill="none" d="M372 506l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_17_" fill="#ECECEC" d="M368 497h-20v-13l1-1h17l2 1v13z"/><path id="Wind:_Air_Vent_9_" fill="none" d="M348 497h20v6l-1 1h-18l-1-1v-6z"/></g><g id="Row4:_Window_1_"><path id="Wind:_Bench_17_" fill="none" d="M408 506l-2 2h-23l-2-2 2-2h23l2 2z"/><path id="Wind:_Glass_16_" fill="#ECECEC" d="M404 497h-19v-13l1-1h17l1 1v13z"/><path id="Wind:_Air_Vent_8_" fill="none" d="M385 497h19v6l-1 1h-17l-1-1v-6z"/></g><g id="Row4:_Window"><path id="Wind:_Bench_14_" fill="none" stroke-linecap="round" d="M418 508l-2-2 2-2h24l2 2-2 2h-24z"/><path id="Wind:_Glass_15_" fill="#ECECEC" d="M440 495h-20v-10l1-1h17l2 1v10z"/><path id="Wind:_Air_Vent_7_" fill="none" d="M420 495h20v8l-1 1h-18l-1-1v-8z"/></g></g><g id="ROW_3" stroke="#000" stroke-miterlimit="10" stroke-width="2"><g id="Row3:_Window"><path id="Wind:_Bench_9_" fill="none" d="M372 543l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_9_" fill="#ECECEC" d="M368 535h-20v-13l1-1h17l2 1v13z"/><path id="Wind:_Air_Vent_2_" fill="none" d="M348 535h20v5l-1 1h-18l-1-1v-5z"/></g><g id="Row3:_Window_1_"><path id="Wind:_Bench_12_" fill="none" d="M408 543l-2 2h-23l-2-2 2-2h23l2 2z"/><path id="Wind:_Glass_13_" fill="#ECECEC" d="M404 527h-19v-5l1-1h17l1 1v5z"/><path id="Wind:_Air_Vent_5_" fill="none" d="M385 527h19v13l-1 1h-17l-1-1v-13z"/></g><g id="Row3:_Window_2_"><path id="Wind:_Bench_15_" fill="none" stroke-linecap="round" d="M436 545h-2"/><path id="Wind:_Bench_13_" fill="none" stroke-linecap="round" d="M432 545h-14l-2-2 2-2h24l2 2-2 2h-4"/><path id="Wind:_Glass_14_" fill="#ECECEC" d="M440 535h-20v-13l1-1h17l2 1v13z"/><path id="Wind:_Air_Vent_6_" fill="none" d="M420 535h20v5l-1 1h-18l-1-1v-5z"/></g></g><g id="ROW_2"><g id="Row2:_Window" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Bench_10_" fill="none" d="M409 592l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_11_" fill="#ECECEC" d="M405 583h-20v-14l1-1h17l2 1v14z"/><path id="Wind:_Air_Vent_3_" fill="none" d="M385 583h19v7h-18l-1-1v-6z"/></g><g id="Row2:_Window_1_" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path id="Wind:_Bench_11_" fill="none" d="M444 592l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_12_" fill="#ECECEC" d="M440 583h-20v-14l1-1h17l2 1v14z"/><path id="Wind:_Air_Vent_4_" fill="none" d="M420 583h20v6l-1 1h-18l-1-1v-6z"/></g><g id="Row2:_Window_Pink_1_"><path id="Wind:_Bench_8_" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M371 592l-2 2h-22l-2-2 2-2h22l2 2z"/><path id="Wind:_AirVent_3_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M348 584h15"/><path id="Wind:_Glass_10_" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M366 568h-17l-1 1v19l1 2h17l1-1v-20l-1-1z"/><path id="Wind:_Pink_-_70_x25_" fill="#FF0385" d="M369 589h-1v-20l-2-1h-18l-1 1v20c-2 0-3 1-3 3 0 1 1 3 3 3h22l2-3c1-2-1-3-2-3zm0 4h-22l-1-1 1-2h22l1 2-1 1z"/></g></g><g id="ROW_1" stroke="#000" stroke-miterlimit="10" stroke-width="2"><g id="FRONT_DOOR"><g id="Front_Door"><path fill="none" d="M409 617l-2 1h-28c-1 1-1 0-1-1l1-2h28l2 2z"/><path fill="#ECECEC" d="M381 619h25v36h-25z"/><path fill="none" d="M393 619v36"/></g><g id="STAIRS"><g id="Stairs" fill="none"><path d="M411 657l-2 2h-36l-2-2 2-2h36l2 2zM399 656v3"/></g><g id="Stairs_1_"><path fill="#ECECEC" d="M411 661l-2 1h-39l-2-1 2-2h41v2z"/><path fill="none" d="M397 659v3"/></g></g></g><g id="Row1:_Wind"><path id="Wind:_Bench_7_" fill="none" d="M443 647l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_8_" fill="#ECECEC" d="M439 622h-19v-5l1-1h17l1 1v5z"/><path id="Wind:_Air_Vent_1_" fill="none" d="M420 622h19v22l-1 1h-17l-1-1v-22z"/></g><g id="Row1:_Window"><path id="Wind:_Bench_6_" fill="none" d="M371 647l-2 2h-24l-2-2 2-2h24l2 2z"/><path id="Wind:_Glass_7_" fill="#ECECEC" d="M367 638h-19v-21l1-1h17l1 1v21z"/><path id="Wind:_Air_Vent" fill="none" d="M348 638h19v6l-1 1h-17l-1-1v-6z"/></g></g></g><g id="SpaceShip__x2B__BeamFront" class="shipy"><path id="Beam_Front" fill="#FF188E" d="M551 743L335 224l-30 4 88 515z" class="beams"/><g id="Spaceahip" class="ufo"><g id="Light"><path id="Light_Line" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M309 177l2-5c2 0 3 2 4 4l-6 1z"/><path id="Light_Flash_70_x25_" fill="#FF0385" d="M308 178v-1l1-4 2-2c2 0 4 2 4 5v1l-7 1z"/></g><g id="Dome"><g id="Underneath"><path id="Underneath_Bar_White" fill="#FFF" d="M273 219s2-5 7-5l73-11c2 0 7-1 9 4l-51 6-38 6z"/><path id="Underneath_Bar_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M273 219s2-5 7-5l73-11c2 0 7-1 9 4"/></g><path id="Dome_Shadow" fill="#E2E2E2" d="M320 177c-23 0-38 15-38 34v2l9-1s3-10 10-19c9-11 19-16 19-16z"/><path id="Dome_Line_2_" fill="#FFF" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M282 213v-2a35 35 0 0 1 69-8l-69 10z"/><g id="Dome_Shine_Line" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M288 200c4-8 11-15 19-18M287 204v-2"/></g></g><g id="Saucer_1_"><path id="Saucer_Line_2_" fill="#FCFCFC" d="M284 217c-27 5-45 9-44 15 0 5 36 3 79-4s79-13 78-20c-1-4-38-3-81 4l-28 4"/><path id="Saucer_Shadow" fill="#E2E2E2" d="M397 208c-5-3-37 5-78 12-42 6-79 8-79 12s39 2 80-4c41-7 82-16 77-20z"/><path id="Saucer_Line_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M284 217c-27 5-45 9-44 15 0 5 36 3 79-4s79-13 78-20c-1-4-38-3-81 4l-28 4"/></g><g class="winscale"><g id="Window"><path id="Window_Shadow" fill="#E2E2E2" d="M293 203c0 1 1 2 2 1h6l2-2-1-3-2-2-6 1c-1 0-2 1-1 2v3z"/><path id="Window_Frame" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M291 205c1 2 2 3 4 2l12-2c2 0 3-1 3-3l-1-5c0-2-2-3-4-3l-11 2c-2 0-4 2-4 4l1 5z"/></g></g></g></g><g id="BACK_EXTRAS"><path id="MOON" fill="#FFFDFD" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M636 174l2 9a21 21 0 0 1-30 18 21 21 0 0 0 39-9c0-8-5-15-11-18z" class="themoon"/><g id="LADDER" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M465 608l33 54M475 608l33 55M478 613h-10M481 619h-10M485 625h-10M488 630h-10M492 636h-10M495 642h-10M499 648h-10M502 653h-10M505 659h-9"/></g></g><g id="BUILDING_3"><g id="_x33__-_BUILDING_STUCTURE"><path id="_x33_-Builing_MainPlane" fill="#FCFCFC" d="M505 277h120v385H505z"/><path id="_x33_-Builing_MainPlane_1_" fill="#ECECEC" d="M624 277h50v385h-50z"/><g id="_x33_-Building_Structure_Lines" fill="none" stroke="#020202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M505 663V277M624 663V277M674 411V277M674 419v-3M674 663V422"/></g><g id="_x3C_3-Builing_-_HorizonralsTop_x3E__1_" fill="#FCFCFC" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path d="M678 275c0 1-1 2-3 2h-51v-5h51c2 0 3 1 3 3z"/><path d="M628 275l-2 2H504c-2 0-3-1-3-2 0-2 1-3 3-3h122c1 0 2 1 2 3z"/></g><g id="_x3C_3-Builing_-_HorizonralsBottom_x3E_" fill="#FCFCFC" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path d="M678 592c0 2-1 3-3 3h-51v-5h51c2 0 3 1 3 2z"/><path stroke-linecap="round" d="M527 595h-23c-2 0-3-1-3-3 0-1 1-2 3-2h122l2 2h1c0 2-2 3-3 3h-92"/></g></g><g id="Row1_BOTTOM_-_SqaureWindows" fill="#ECECEC" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path id="Row1:_WindowSqaure" d="M542 661l-1 1h-27l-1-1v-24l1-1h27l1 1v24z"/><path id="Row1:_WindowSqaure_1_" d="M580 661l-1 1h-27l-1-1v-24l1-1h27l1 1v24z"/><path id="Row1:_WindowSqaure_2_" d="M618 661l-1 1h-27l-1-1v-24l1-1h27l1 1v24z"/></g><g id="Row1_TOP_-_SpanishWindows" stroke="#000" stroke-miterlimit="10" stroke-width="2"><g id="_x3C_SpanishWindows_x3E__1_"><path fill="#ECECEC" d="M544 625v-14c0-2 2-7 8-7s7 5 7 7v14h-15z"/><path fill="none" stroke-linecap="round" d="M562 625h-21M560 614h-16"/></g><g id="_x3C_SpanishWindows_x3E__2_"><path fill="#ECECEC" d="M572 625v-14c0-2 2-7 8-7s8 5 8 7v14h-16z"/><path fill="none" stroke-linecap="round" d="M590 625h-20M588 614h-16"/></g><g id="_x3C_SpanishWindows_x3E__3_"><path fill="#ECECEC" d="M601 625v-14c0-2 1-7 7-7s8 5 8 7v14h-15z"/><path fill="none" stroke-linecap="round" d="M618 625h-20M616 614h-15"/></g><g id="_x3C_SpanishWindows_x3E_"><path fill="#ECECEC" d="M516 625v-14c0-2 1-7 7-7 7 0 8 5 8 7v14h-15z"/><path fill="none" stroke-linecap="round" d="M533 625h-20M531 614h-15"/></g></g><g id="Row2_-_SpanishWindows_-_Long" fill="#ECECEC" stroke="#000" stroke-miterlimit="10" stroke-width="2"><path id="_x3C_SpanishWindows_-_Long_x3E__1_" d="M516 579v-58c0-2 1-8 8-8s9 6 9 8v58h-17z"/><path id="_x3C_SpanishWindows_-_Long_x3E__2_" d="M544 579v-58c0-2 1-8 8-8s9 6 9 8v58h-17z"/><path id="_x3C_SpanishWindows_-_Long_x3E__3_" d="M572 579v-58c0-2 2-8 8-8 7 0 9 6 9 8v58h-17z"/><path id="_x3C_SpanishWindows_-_Long_x3E__4_" d="M600 579v-58c0-2 2-8 8-8 7 0 9 6 9 8v58h-17z"/></g><g id="Row_3"><g id="Row3:_Window_3_"><path id="Row3_Wind:_Bench" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 505h19"/><g id="Row3_Wind:_Glass_1_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass" fill="#ECECEC" d="M532 504l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame" fill="none" d="M531 496h-14"/></g></g><g id="Row3:_Window_4_"><path id="Row3_Wind:_Bench_1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 505h19"/><g id="Row3_Wind:_Glass_2_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_3_" fill="#ECECEC" d="M560 504l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_1_" fill="none" d="M559 496h-14"/></g></g><g id="Row3:_Window_5_"><path id="Row3_Wind:_Bench_2_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 505h19"/><g id="Row3_Wind:_Glass_4_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_5_" fill="#ECECEC" d="M588 504l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_2_" fill="none" d="M588 496h-15"/></g></g><g id="Row3:_Window_PINK"><path id="Row3_Wind:_Bench_3_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 505h19"/><g id="Row3_Wind:_Glass_6_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_7_" fill="#ECECEC" d="M616 504l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_3_" fill="none" d="M616 496h-15"/></g><path id="Row3_Wind:_Glass_70_x25_" fill="#FF0385" d="M618 504h-1v-16l-2-2h-13l-2 2v16h-2v1l1 1h19l1-1-1-1z"/></g></g><g id="Row_4"><g id="Row3:_Window_8_"><path id="Row3_Wind:_Bench_7_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 476h19"/><g id="Row3_Wind:_Glass_14_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_15_" fill="#ECECEC" d="M532 475l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_7_" fill="none" d="M531 467h-14"/></g></g><g id="Row3:_Window_7_"><path id="Row3_Wind:_Bench_6_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 476h19"/><g id="Row3_Wind:_Glass_12_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_13_" fill="#ECECEC" d="M560 475l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_6_" fill="none" d="M559 467h-14"/></g></g><g id="Row3:_Window_6_"><path id="Row3_Wind:_Bench_5_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 476h19"/><g id="Row3_Wind:_Glass_10_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_11_" fill="#ECECEC" d="M588 475l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_5_" fill="none" d="M588 467h-15"/></g></g><g id="Row3:_Window_9_"><path id="Row3_Wind:_Bench_4_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 476h19"/><g id="Row3_Wind:_Glass_8_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_9_" fill="#ECECEC" d="M616 475l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_4_" fill="none" d="M616 467h-15"/></g></g></g><g id="Row_5"><g id="Row3:_Window_13_"><path id="Row3_Wind:_Bench_11_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 448h19"/><g id="Row3_Wind:_Glass_22_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_23_" fill="#ECECEC" d="M532 447l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_11_" fill="none" d="M531 439h-14"/></g></g><g id="Row3:_Window_12_"><path id="Row3_Wind:_Bench_10_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 448h19"/><g id="Row3_Wind:_Glass_20_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_21_" fill="#ECECEC" d="M560 447l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_10_" fill="none" d="M559 439h-14"/></g></g><g id="Row3:_Window_11_"><path id="Row3_Wind:_Bench_9_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 448h19"/><g id="Row3_Wind:_Glass_18_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_19_" fill="#ECECEC" d="M588 447l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_9_" fill="none" d="M588 439h-15"/></g></g><g id="Row3:_Window_10_"><path id="Row3_Wind:_Bench_8_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 448h19"/><g id="Row3_Wind:_Glass_16_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_17_" fill="#ECECEC" d="M616 447l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_8_" fill="none" d="M616 439h-15"/></g></g></g><g id="Row_6"><g id="Row3:_Window_17_"><path id="Row3_Wind:_Bench_15_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 419h19"/><g id="Row3_Wind:_Glass_30_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_31_" fill="#ECECEC" d="M532 418l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_15_" fill="none" d="M531 410h-14"/></g></g><g id="Row3:_Window_16_"><path id="Row3_Wind:_Bench_14_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 419h19"/><g id="Row3_Wind:_Glass_28_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_29_" fill="#ECECEC" d="M560 418l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_14_" fill="none" d="M559 410h-14"/></g></g><g id="Row3:_Window_15_"><path id="Row3_Wind:_Bench_13_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 419h19"/><g id="Row3_Wind:_Glass_26_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_27_" fill="#ECECEC" d="M588 418l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_13_" fill="none" d="M588 410h-15"/></g></g><g id="Row3:_Window_14_"><path id="Row3_Wind:_Bench_12_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 419h19"/><g id="Row3_Wind:_Glass_24_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_25_" fill="#ECECEC" d="M616 418l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_12_" fill="none" d="M616 410h-15"/></g></g></g><g id="Row_7"><g id="Row7:_Window_2_"><path id="Row3_Wind:_Bench_27_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 391h19"/><g id="Row3_Wind:_Glass_54_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_55_" fill="#ECECEC" d="M532 390l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_27_" fill="none" d="M531 382h-14"/></g></g><g id="Row7:_Window_1_"><path id="Row3_Wind:_Bench_26_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 391h19"/><g id="Row3_Wind:_Glass_52_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_53_" fill="#ECECEC" d="M560 390l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_26_" fill="none" d="M559 382h-14"/></g></g><g id="Row7:_Window_PINK"><path id="Row3_Wind:_Bench_25_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 391h19"/><g id="Row3_Wind:_Glass_50_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_51_" fill="#ECECEC" d="M588 390l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_25_" fill="none" d="M588 382h-15"/></g><path id="Row3_Wind:_Glass_70_x25__1_" fill="#FF0385" d="M590 391h-1v-17l-2-2h-13l-2 2v16h-2v1l1 1h19l1-1h-1z"/></g><g id="Row7:_Window"><path id="Row3_Wind:_Bench_24_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 391h19"/><g id="Row3_Wind:_Glass_48_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_49_" fill="#ECECEC" d="M616 390l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_24_" fill="none" d="M616 382h-15"/></g></g></g><g id="Row_8"><g id="Row8:_Window_2_"><path id="Row3_Wind:_Bench_31_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 363h19"/><g id="Row3_Wind:_Glass_62_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_63_" fill="#ECECEC" d="M532 362l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_31_" fill="none" d="M531 354h-14"/></g></g><g id="Row8:_Window_PINK_1_"><path id="Row3_Wind:_Bench_30_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 363h19"/><g id="Row3_Wind:_Glass_60_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_61_" fill="#ECECEC" d="M560 362l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_30_" fill="none" d="M559 354h-14"/></g><path id="Row3_Wind:_Glass_70_x25__2_" fill="#FF0385" d="M562 363h-1v-17l-2-2h-13l-2 2v16h-2v2h20v-1c0-1 0 0 0 0z"/></g><g id="Row8:_Window_1_"><path id="Row3_Wind:_Bench_29_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 363h19"/><g id="Row3_Wind:_Glass_58_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_59_" fill="#ECECEC" d="M588 362l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_29_" fill="none" d="M588 354h-15"/></g></g><g id="Row8:_Window"><path id="Row3_Wind:_Bench_28_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 363h19"/><g id="Row3_Wind:_Glass_56_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_57_" fill="#ECECEC" d="M616 362l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_28_" fill="none" d="M616 354h-15"/></g></g></g><g id="Row_9"><g id="Row3:_Window_21_"><path id="Row3_Wind:_Bench_19_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 334h19"/><g id="Row3_Wind:_Glass_38_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_39_" fill="#ECECEC" d="M532 333l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_19_" fill="none" d="M531 325h-14"/></g></g><g id="Row3:_Window_20_"><path id="Row3_Wind:_Bench_18_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 334h19"/><g id="Row3_Wind:_Glass_36_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_37_" fill="#ECECEC" d="M560 333l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_18_" fill="none" d="M559 325h-14"/></g></g><g id="Row3:_Window_19_"><path id="Row3_Wind:_Bench_17_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 334h19"/><g id="Row3_Wind:_Glass_34_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_35_" fill="#ECECEC" d="M588 333l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_17_" fill="none" d="M588 325h-15"/></g></g><g id="Row3:_Window_18_"><path id="Row3_Wind:_Bench_16_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 334h19"/><g id="Row3_Wind:_Glass_32_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_33_" fill="#ECECEC" d="M616 333l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_16_" fill="none" d="M616 325h-15"/></g></g></g><g id="Row_10"><g id="Row3:_Window_25_"><path id="Row3_Wind:_Bench_23_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M515 306h19"/><path id="Row3_Wind:_Glass_Gray" fill="#ECECEC" d="M532 305l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><g id="Row3_Wind:_Glass_46_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_64_" d="M517 297v-8l1-1h13l1 1v16l-1 1h-13l-1-1v-4"/><path id="Row3_Wind:_Frame_23_" d="M531 297h-14"/></g></g><g id="Row3:_Window_24_"><path id="Row3_Wind:_Bench_22_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M543 306h19"/><g id="Row3_Wind:_Glass_44_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_45_" fill="#ECECEC" d="M560 305l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_22_" fill="none" d="M559 297h-14"/></g></g><g id="Row3:_Window_23_"><path id="Row3_Wind:_Bench_21_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M571 306h19"/><g id="Row3_Wind:_Glass_42_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_43_" fill="#ECECEC" d="M588 305l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_21_" fill="none" d="M588 297h-15"/></g></g><g id="Row3:_Window_22_"><path id="Row3_Wind:_Bench_20_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M599 306h19"/><g id="Row3_Wind:_Glass_40_" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="Row3_Wind:_Glass_41_" fill="#ECECEC" d="M616 305l-1 1h-13l-1-1v-16l1-1h13l1 1v16z"/><path id="Row3_Wind:_Frame_20_" fill="none" d="M616 297h-15"/></g></g></g></g><g id="FRONT_EXTRAS"><g id="BUSH_-_Right"><path id="_x3C_BushShape_x3E_" fill="#FFF" d="M671 663s1-21-18-21l-8 1c-1 0-4-3-9-3l-7 2c-3-2-7-4-13-4-15 1-22 16-22 25h77z"/><path id="_x3C_BushLine_x3E_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M671 663s1-21-18-21c-13 0-17 8-17 8"/><path id="_x3C_BushLine_x3E__1_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M638 654s-6-16-22-16-22 16-22 25"/><path id="_x3C_BushLine_x3E__2_" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M645 644s-3-4-9-4c-4 0-7 2-7 2"/></g><g id="TREE_-_Sharp" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path id="_x3C_TreeShape_x3E_" fill="#FFFDFD" d="M683 639c3 0 18-1 18-18 0-22-14-38-18-38s-17 16-17 38c0 17 15 18 17 18z"/><path fill="none" d="M681 589s-7 8-8 19M683 627v36"/></g><g id="TREE_-_Round" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><circle cx="174" cy="622" r="18" fill="#FFF"/><path fill="#FFF" d="M161 622c1-7 7-13 14-14M168 625l6 5 5-4"/><path fill="none" d="M174 662v-32"/></g><g id="BUSH_-_Left" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M115 663c0-15 11-25 24-25 7 0 14 4 18 10M123 650c3-4 8-7 14-8M152 654v1"/><path d="M183 663c0-11-7-18-16-18-6 0-11 3-14 7"/></g><g id="FLOOR_LINE" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M91 663h-2M103 663h-7M732 663H106M743 663h-7"/></g></g><path fill="#FFF" d="M36 664h780v300H36z"/></svg>
          </div>



        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Get in Touch</h6>
              </div>
                <form>
                  <form action="https://formcarry.com/s/S2thQbCqEvW" method="POST" accept-charset="UTF-8" >
                  <input type="text" name="field1" placeholder="Your Name" required/>
                  <input type="email" name="field2" placeholder="Email Address"  required/>
                  <textarea name="field3" placeholder="Type your Message" required></textarea>
                  <input type="submit" value="Send" />
                </form>
             </div>
          </div>
        </div>
    </div>


    

    <div class="rounded-social-buttons tag">
    <a class="social-button twitter" href="https://twitter.com/benguetta7" target="_blank">
    <!-- SVG code for twitter icon -->
    <svg class="twitter-icon-footer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500"
        xml:space="preserve">
        <!-- bird body -->
        <path id="body" fill="#5DA8DC" d="M142.9,364.1c-1.6,1-3,1.7-4,2.3c-3,1.5-7.9,3.8-14.9,6.9c-7,3.1-14.7,5.7-23.1,7.9
                          c-8.4,2.2-15.6,3.8-21.8,4.7c-6.2,0.9-12.2,1.5-18.1,1.8s-11.4,0.3-16.7,0c-5.2-0.3-8.5-0.5-9.6-0.6l-1.8-0.2l-0.4-0.1l-0.4-0.1v0.8
                          h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H33l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l3.6,2.2c2.4,1.5,4.5,2.6,6.4,3.6
                          s6.6,3.3,14.1,7.1c7.6,3.7,16.6,7.4,27.2,11.1s18.6,6.2,24,7.4c5.4,1.3,12.8,2.6,22.2,3.9s14.9,2.1,16.3,2.2
                          c1.5,0.1,3.3,0.3,5.5,0.4l3.3,0.2v0.2h25.6v-0.2l14-1.3c9.3-0.9,17.6-2.1,25-3.3c7.3-1.3,14.9-3.1,22.8-5.5
                          c7.9-2.4,15.3-4.9,22.4-7.7c7.1-2.8,13.7-5.7,19.7-9c6.1-3.2,11.3-6,15.6-8.5c4.3-2.5,9.1-5.6,14.2-9.3c5.2-3.7,10-7.5,14.6-11.2
                          s7.1-5.9,7.7-6.4c0.6-0.6,4-4,10.2-10.2c6.2-6.3,11.3-11.9,15.4-16.8c4-5,8-10.3,12-15.9c3.9-5.6,8.3-12.5,13-20.6
                          s9.2-17.3,13.5-27.5s8-20.7,11-31.5c3-10.7,5.2-20.4,6.7-28.9s2.4-16.5,3-23.8c0.5-7.3,0.8-13.9,0.9-19.7s2.5-10.8,7.4-14.8
                          s9.9-8.5,15-13.7c5.1-5.1,7.9-8,8.3-8.7c0.5-0.7,0.9-1.1,1.1-1.2c0.3-0.1,2.1-2.3,5.3-6.7c3.3-4.4,5-6.6,5-6.7l0.1-0.1l0.2-0.4
                          l0.2-0.4l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.1l0.2-0.1V115l-1,0.3l-0.8,0.1
                          l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.6,0.2l-1.2,0.4l-10.6,3.6c-6.7,2.2-13.7,4.1-21,5.7l-11,2.4h-1.9l0.1-0.1l0.1-0.1l0.1-0.1
                          l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l1.9-1.3
                          c1.3-0.9,2.4-1.8,3.3-2.8s2.8-2.7,5.6-5.1c2.8-2.4,6-6,9.5-10.7s6.5-9.4,8.8-14s3.6-7.2,3.7-7.9c0.1-0.6,0.3-1.2,0.4-1.6l0.2-0.6
                          l0.2-0.4l0.2-0.4l0.2-0.6l0.2-0.6l0.1-0.6l0.1-0.6l-0.4,0.1l-0.4,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.4,0.2l-0.4,0.2
                          l-0.4,0.2l-0.4,0.2l-0.1,0.1c-0.1,0.1-0.8,0.4-1.9,1.2c-1.2,0.7-4.7,2.4-10.5,5s-11.6,5-17.5,7.1s-11.4,3.7-16.5,4.9
                          s-8.8,0.5-11.3-1.9c-2.4-2.4-5.2-4.7-8.3-6.9c-3.1-2.2-6.5-4.3-10.4-6.4c-3.8-2.1-7.7-3.9-11.8-5.5c-4-1.6-8.6-2.9-13.5-3.8
                          l-7.4-1.5h-20.5v0.1c0,0.1-1.7,0.4-5.1,0.9s-7.6,1.6-12.6,3.3c-5,1.7-10.4,4.2-16.3,7.4c-5.9,3.3-11.1,7-15.7,11.2
                          s-8.3,8.3-11.2,12.2c-2.9,3.9-5.2,7.4-7,10.5C221.5,163.3,231.3,307,142.9,364.1z" />

        <!-- wing1 -->
        <path id="wing1" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
        <!-- wing2 -->
        <path id="wing2" fill="#5DA8DC" d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
    </svg>
    </a>

    <a class="social-button linkedin" href="https://www.linkedin.com/in/ben-guetta/" target="_blank" >
    <!-- svg code for linkedin icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>



 

    <a class="social-button github" href="https://github.com/bn-jo" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>


    
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent light mode for page change
if (localStorage.getItem("lightMode") == "light") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "light");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.remove("dark-theme");
    document.getElementById("dark_toggler").checked = false;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.remove("dsc");
  }
} else {
  localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});
