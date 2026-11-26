var wms_layers = [];


        var lyr_OpenStreetMap_Base_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_Base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_M3_1_VisualizacionProyectos_obra_1 = new ol.format.GeoJSON();
var features_M3_1_VisualizacionProyectos_obra_1 = format_M3_1_VisualizacionProyectos_obra_1.readFeatures(json_M3_1_VisualizacionProyectos_obra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M3_1_VisualizacionProyectos_obra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M3_1_VisualizacionProyectos_obra_1.addFeatures(features_M3_1_VisualizacionProyectos_obra_1);
var lyr_M3_1_VisualizacionProyectos_obra_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M3_1_VisualizacionProyectos_obra_1, 
                style: style_M3_1_VisualizacionProyectos_obra_1,
                popuplayertitle: 'M3_1_Visualizacion — Proyectos_obra',
                interactive: true,
                title: '<img src="styles/legend/M3_1_VisualizacionProyectos_obra_1.png" /> M3_1_Visualizacion — Proyectos_obra'
            });

lyr_OpenStreetMap_Base_0.setVisible(true);lyr_M3_1_VisualizacionProyectos_obra_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_Base_0,lyr_M3_1_VisualizacionProyectos_obra_1];
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldAliases', {'fid': 'fid', 'proyecto': 'proyecto', 'region': 'region', 'tipo': 'tipo', 'presupuesto_mxn': 'presupuesto_mxn', 'avance_prog_jun': 'avance_prog_jun', 'avance_real_jun': 'avance_real_jun', 'avance_prog_sep': 'avance_prog_sep', 'avance_real_sep': 'avance_real_sep', });
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldImages', {'fid': 'Hidden', 'proyecto': 'TextEdit', 'region': 'TextEdit', 'tipo': 'TextEdit', 'presupuesto_mxn': 'Range', 'avance_prog_jun': 'TextEdit', 'avance_real_jun': 'TextEdit', 'avance_prog_sep': 'TextEdit', 'avance_real_sep': 'TextEdit', });
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldLabels', {'proyecto': 'no label', 'region': 'no label', 'tipo': 'no label', 'presupuesto_mxn': 'no label', 'avance_prog_jun': 'no label', 'avance_real_jun': 'no label', 'avance_prog_sep': 'no label', 'avance_real_sep': 'no label', });
lyr_M3_1_VisualizacionProyectos_obra_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});