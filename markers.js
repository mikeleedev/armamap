var markers = [
    // military
    { loc: [118.986, 49.261], text: '9000' },
    { loc: [117.629, 49.449], text: '1000' },
    // harbor (north of Saint Philppe)   
    { loc: [111.467, 44.321], text: '2000' },
    { loc: [111.183, 44.116], text: '3000' },
    { loc: [111.213, 44.420], text: '1500' },
    { loc: [111.243, 44.634], text: '1000' },
    { loc: [110.512, 44.718], text: '2500' },
    { loc: [109.016, 43.626], text: '1000' },
    { loc: [109.046, 43.822], text: '1000' },
    { loc: [108.762, 44.354], text: '550' },
    { loc: [108.121, 44.116], text: '550' },
    // Saint Philipe
    { loc: [106.896, 39.259], text: '365' },
    { loc: [106.754, 46.815], text: '685' },
    { loc: [104.909, 44.485], text: '685' },
    // farm
    { loc: [99.039, 50.318], text: '9999', color: 'green' },
    // power plant (not on this map)
    { loc: [97.251, 58.183], text: '1200' },
    { loc: [97.233, 58.463], text: '1200' },
    // Meaux
    { loc: [94.967, 44.209], text: '1000' },
    { loc: [94.967, 44.420], text: '1000' },
    { loc: [94.787, 43.187], text: '3000' },
    { loc: [94.456, 43.364], text: '2000' },
    { loc: [94.241, 43.303], text: '885' },
    { loc: [94.159, 43.159], text: '1000' },
    { loc: [94.167, 44.564], text: '550' },
    // Tyrone
    { loc: [90.358, 48.810], text: '550' },
    { loc: [90.289, 49.842], text: '930' },
    { loc: [89.111, 49.552], text: '685' },
    // military (coast south west of Tyrone)
    { loc: [84.462, 37.381], text: '3000' },
    { loc: [83.520, 39.077], text: '3000' },
    { loc: [83.529, 39.016], text: '1000' },
    { loc: [83.525, 39.179], text: '1500' },
    // Gorey
    { loc: [80.429, 48.511], text: '9999', color: 'green' },
    // Gravette
    { loc: [76.722, 41.174], text: '685' },
    // Montignac
    { loc: [70.603, 48.576], text: '550' },
    { loc: [69.248, 49.361], text: '685' },
    { loc: [68.827, 46.451], text: '685' },
    { loc: [68.419, 45.559], text: '2100' },
    // Entre-Deux
    { loc: [70.689, 58.188], text: '685' },
    { loc: [69.704, 58.482], text: '550' },
    // military (fisherman's bay)
    { loc: [67.434, 74.338], text: '2000' },
    { loc: [67.103, 74.062], text: '2100' },
    { loc: [66.772, 73.801], text: '2100' },
    // Villeneuve
    { loc: [65.034, 29.512], text: '685' },
    // industrial 
    { loc: [64.308, 64.927], text: '9999', color: 'green' },
    // Lamentin (left)
    { loc: [60.403, 8.776], text: '3000' },
    { loc: [60.244, 9.079], text: '885' },
    { loc: [60.085, 9.238], text: '1000' },
    // Lamentin (middle)
    { loc: [63.375, 11.284], text: '800' },
    { loc: [60.889, 10.989], text: '1000' },
    { loc: [60.601, 11.078], text: '1000' },
    { loc: [60.468, 10.760], text: '2000' },
    { loc: [60.025, 10.448], text: '2000' },
    { loc: [59.603, 10.065], text: '2100' },
    // Lamentin (right)
    { loc: [60.197, 12.297], text: '550' },
    // south of Pinewood Lake
    { loc: [57.741, 48.058], text: '9999', color: 'green' },
    // Provins
    { loc: [59.767, 55.096], text: '550' },
    { loc: [59.307, 55.689], text: '550' },
    { loc: [58.128, 55.717], text: '685' },
    // Chotain (inland)
    { loc: [59.255, 70.186], text: '550' },
    // Le Moule
    { loc: [55.050, 26.107], text: '930' },
    { loc: [52.809, 25.976], text: '985' },
    // sawmill
    { loc: [51.605, 31.478], text: '9999', color: 'green' },
    // Figari
    { loc: [53.403, 52.289], text: '550' },
    { loc: [53.192, 53.251], text: '685' },
    // Laruns
    { loc: [54.611, 75.094], text: '550' },
    // southwest supply depot
    { loc: [44.613, 69.130], text: '9999', color: 'green' },
    // Levie
    { loc: [46.996, 75.015], text: '930' },
    { loc: [46.196, 74.884], text: '685' },
    // military Levie (left)
    { loc: [43.229, 74.198], text: '1200' },
    { loc: [42.863, 74.015], text: '1200' },
    { loc: [42.502, 73.871], text: '1200' },
    // military Levie (right)
    { loc: [42.915, 75.949], text: '8000' },
    { loc: [42.846, 76.224], text: '1500' },
    { loc: [42.566, 75.748], text: '3300' },
    { loc: [42.502, 76.145], text: '1000' },
    { loc: [42.016, 76.033], text: '5000' },
    // southeast of military Levie
    { loc: [40.055, 78.443], text: '7500' },
    { loc: [39.655, 78.929], text: '4000' },
    // Morton
    { loc: [40.386, 51.383], text: '500' },
    { loc: [40.201, 50.089], text: '685' },
    { loc: [39.832, 50.636], text: '550' },
    { loc: [39.195, 50.248], text: '2000' },
    { loc: [38.060, 49.879], text: '885' },
    // Durras
    { loc: [28.071, 87.494], text: '685' },
    { loc: [27.920, 89.143], text: '930' },
    { loc: [27.245, 90.427], text: '9999', color: 'green' },
    // Regina
    { loc: [24.846, 72.899], text: '930' },
    { loc: [23.547, 72.250], text: '930' },
    { loc: [20.494, 70.830], text: '9999', color: 'green' },
    // Saint-Pierre (left)
    { loc: [16.306, 96.157], text: '930' },
    { loc: [15.489, 96.405], text: '550' },
    // Saint-Pierre (right)
    { loc: [16.375, 99.301], text: '1000' },
    { loc: [16.031, 99.684], text: '550' },
    { loc: [16.112, 99.936], text: '550' },
    { loc: [15.803, 100.295], text: '2000' },
    { loc: [15.497, 99.431], text: '2000' },
    { loc: [15.403, 99.707], text: '3000' },
    { loc: [15.356, 100.534], text: '2100' },
    { loc: [15.162, 99.880], text: '1500' },
    // Montfort Castle
    { loc: [11.490, 93.201], text: '0/600' }
  ];