var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KESESUAIANTUPLAHTERHADAPRTRW_2 = new ol.format.GeoJSON();
var features_KESESUAIANTUPLAHTERHADAPRTRW_2 = format_KESESUAIANTUPLAHTERHADAPRTRW_2.readFeatures(json_KESESUAIANTUPLAHTERHADAPRTRW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESESUAIANTUPLAHTERHADAPRTRW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESESUAIANTUPLAHTERHADAPRTRW_2.addFeatures(features_KESESUAIANTUPLAHTERHADAPRTRW_2);
var lyr_KESESUAIANTUPLAHTERHADAPRTRW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESESUAIANTUPLAHTERHADAPRTRW_2, 
                style: style_KESESUAIANTUPLAHTERHADAPRTRW_2,
                popuplayertitle: 'KESESUAIAN TUPLAH TERHADAP RTRW',
                interactive: true,
    title: 'KESESUAIAN TUPLAH TERHADAP RTRW<br />\
    <img src="styles/legend/KESESUAIANTUPLAHTERHADAPRTRW_2_0.png" /> PERLU DIKAJI<br />\
    <img src="styles/legend/KESESUAIANTUPLAHTERHADAPRTRW_2_1.png" /> SESUAI<br />\
    <img src="styles/legend/KESESUAIANTUPLAHTERHADAPRTRW_2_2.png" /> TIDAK SESUAI<br />\
    <img src="styles/legend/KESESUAIANTUPLAHTERHADAPRTRW_2_3.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_KESESUAIANTUPLAHTERHADAPRTRW_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_KESESUAIANTUPLAHTERHADAPRTRW_2];
lyr_KESESUAIANTUPLAHTERHADAPRTRW_2.set('fieldAliases', {'FID_TUPLAH': 'FID_TUPLAH', 'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Penggunaan Lahan pada Tuplah 2019', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_POLA_R': 'FID_POLA_R', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ': 'Rencana Tata Ruang Wilayah Tahun 2021-2041', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'Kabupaten', 'WADMKC': 'Kecamatan', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'LUASHA': 'LUASHA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'Kesesuain': 'Kesesuaian antara Tuplah dan RTRW', });
lyr_KESESUAIANTUPLAHTERHADAPRTRW_2.set('fieldImages', {'FID_TUPLAH': 'Hidden', 'OBJECTID_1': 'Hidden', 'NAME': 'Hidden', 'Provinsi': 'Hidden', 'PL_19_R': 'Hidden', 'Legenda': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'FID_POLA_R': 'Hidden', 'OBJECTID_2': 'Hidden', 'NAMOBJ': 'TextEdit', 'ORDE01': 'Hidden', 'ORDE02': 'Hidden', 'ORDE03': 'Hidden', 'ORDE04': 'Hidden', 'KODKWS': 'Hidden', 'JNSRPR': 'Hidden', 'WADMPR': 'Hidden', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'Hidden', 'KP2B_2': 'Hidden', 'KRB_03': 'Hidden', 'CAGBUD': 'Hidden', 'RESAIR': 'Hidden', 'LUASHA': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Le_2': 'Hidden', 'Shape_Ar_1': 'Hidden', 'Kesesuain': 'TextEdit', });
lyr_KESESUAIANTUPLAHTERHADAPRTRW_2.set('fieldLabels', {'Legenda': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'Kesesuain': 'inline label - always visible', });
lyr_KESESUAIANTUPLAHTERHADAPRTRW_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});