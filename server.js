var 	express 	= require('express'),
	swig 	  	= require('swig'),
	body_parser   = require('body-parser'),
	cookie_parser = require('cookie-parser'),
	server            = express(),
	excel_export = require('excel-export'),
	moment        = require('moment'),
           mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_reporte'
});

// rendering views
server.use(body_parser());
server.use(cookie_parser());

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './app/views');

swig.setDefaults({
	cache : false
});


server.use(express.static(__dirname+'/public')); 

var  	indexRouter 	= require('./app/routers/r.index'),
 	formRouter     = require('./app/routers/r.form'),
    	addController  = require('./app/controllers/add');

indexRouter(server)
formRouter(server)
addController(server, conn)

server.get('/consult', function (req, res){
conn.query("select * from user_table", function (error, rows, fields){
if (error){
	throw error;
	console.log(error)
} else{ 
	  var conf ={};
   //conf.stylesXmlFile = "./style.xml";
	conf.cols = [];
  	for (i = 1; i <= 185; i++){
    		conf.cols.push({
     			 caption:'string' + i,
     			 captionStyleIndex: 1,        
     			 type:'string',
     			 width: 20,   
    		});    
 	 }
 	 conf.rows = [];	 
 	for(i in rows){
 		conf.rows.push([rows[i].var_1,rows[i].var_2+'',rows[i].var_3+'',rows[i].var_4+'',rows[i].var_5,rows[i].var_6,rows[i].var_7,rows[i].var_8,rows[i].var_9,moment(rows[i].var_10).format('YYYY-MM-DD'),rows[i].var_11,rows[i].var_12+'',rows[i].var_13,rows[i].var_14,rows[i].var_15+'',moment(rows[i].var_16).format('YYYY-MM-DD'), rows[i].var_17+'', rows[i].var_18+'', rows[i].var_19+'', rows[i].var_20+'', moment(rows[i].var_21).format('YYYY-MM-DD'), moment(rows[i].var_22).format('YYYY-MM-DD'), rows[i].var_23+'',rows[i].var_24+'', rows[i].var_25, rows[i].var_26+'', rows[i].var_27+'', rows[i].var_27_1+'', rows[i].var_28+'', rows[i].var_29+'', moment(rows[i].var_30).format('YYYY-MM-DD'), rows[i].var_31+'', rows[i].var_32+'', rows[i].var_33+'', rows[i].var_34+'', rows[i].var_35+'', rows[i].var_36+'', rows[i].var_37+'', rows[i].var_38+'', rows[i].var_39+'', rows[i].var_40+'', rows[i].var_41+'', rows[i].var_42+'', rows[i].var_43+'', rows[i].var_44_1+'', rows[i].var_44_2+'', rows[i].var_44_3+'', rows[i].var_44_4+'', rows[i].var_44_5+'', rows[i].var_44_6+'', rows[i].var_44_7+'', rows[i].var_44_8+'', rows[i].var_44_9+'', rows[i].var_44_10+'', rows[i].var_44_11+'', rows[i].var_44_12+'', rows[i].var_44_13+'', rows[i].var_44_14+'', rows[i].var_44_15+'', rows[i].var_44_16+'', rows[i].var_44_17,  rows[i].var_44_18, rows[i].var_44_19, rows[i].var_44_20, rows[i].var_45+'', rows[i].var_46+'', rows[i].var_47+'', rows[i].var_48+'', moment(rows[i].var_49).format('YYYY-MM-DD'), rows[i].var_50+'', rows[i].var_51+'', rows[i].var_52+'', rows[i].var_53_1+'', rows[i].var_53_2+'', rows[i].var_53_3+'', rows[i].var_53_4+'', rows[i].var_53_5+'', rows[i].var_53_6+'', rows[i].var_53_7+'', rows[i].var_53_8+'', rows[i].var_53_9+'', rows[i].var_53_10+'', rows[i].var_53_11+'', rows[i].var_53_12+'', rows[i].var_53_13+'', rows[i].var_53_14+'', rows[i].var_53_15+'', rows[i].var_53_16+'', rows[i].var_53_17+'', rows[i].var_53_18+'', rows[i].var_53_19+'', rows[i].var_53_20+'', rows[i].var_54, moment(rows[i].var_55).format('YYYY-MM-DD'), rows[i].var_56, rows[i].var_57+'', rows[i].var_58+'', rows[i].var_59+'', rows[i].var_60+'', rows[i].var_61+'', rows[i].var_62+'', rows[i].var_63+'', rows[i].var_64+'', rows[i].var_65+'', rows[i].var_66+'', rows[i].var_67+'', rows[i].var_68+'', rows[i].var_69+'', rows[i].var_70+'', rows[i].var_71+'', rows[i].var_72+'', rows[i].var_73+'', rows[i].var_74+'', moment(rows[i].var_75).format('YYYY-MM-DD'), rows[i].var_76, moment(rows[i].var_77).format('YYYY-MM-DD'), rows[i].var_78, moment(rows[i].var_79).format('YYYY-MM-DD'), rows[i].var_80+'', rows[i].var_81+'', rows[i].var_81_1+'', rows[i].var_82+'', rows[i].var_83+'', rows[i].var_84+'', rows[i].var_85+'', rows[i].var_86+'', rows[i].var_87+'', rows[i].var_88+'', rows[i].var_89+'', moment(rows[i].var_90).format('YYYY-MM-DD'), rows[i].var_91_1+'', rows[i].var_91_2+'',rows[i].var_91_3+'',rows[i].var_91_4+'', rows[i].var_91_5+'', rows[i].var_91_6+'', rows[i].var_91_7+'', rows[i].var_91_8+'', rows[i].var_91_9+'', rows[i].var_91_10+'', rows[i].var_91_11+'', rows[i].var_91_12+'', rows[i].var_91_13+'', rows[i].var_91_14+'', rows[i].var_91_15+'', rows[i].var_91_16+'', rows[i].var_91_17, rows[i].var_91_18, rows[i].var_91_19, rows[i].var_91_20, rows[i].var_92+'', rows[i].var_92_1+'', rows[i].var_92_2+'', rows[i].var_92_3+'', rows[i].var_92_4+'', rows[i].var_92_5+'', rows[i].var_93+'', moment(rows[i].var_94).format('YYYY-MM-DD'), rows[i].var_95_1+'', rows[i].var_95_1+'', rows[i].var_95_2+'', rows[i].var_95_3+'', rows[i].var_95_4+'', rows[i].var_95_5+'', rows[i].var_95_6+'', rows[i].var_95_7+'', rows[i].var_95_8+'', rows[i].var_95_9+'', rows[i].var_95_10, rows[i].var_95_11, rows[i].var_95_12, rows[i].var_95_13, rows[i].var_95_14, rows[i].var_96+'', rows[i].var_97+'', rows[i].var_98+'', rows[i].var_99+'', moment(rows[i].var_100).format('YYYY-MM-DD'), moment(rows[i].var_101).format('YYYY-MM-DD'), moment(rows[i].var_102).format('YYYY-MM-DD'), rows[i].var_103+'', moment(rows[i].var_104).format('YYYY-MM-DD'), rows[i].var_105, moment(rows[i].var_106).format('YYYY-MM-DD'), rows[i].var_107+'' ])
	 }
	  var result = excel_export.execute(conf);
	  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
	  res.setHeader("Content-Disposition", "attachment; filename=" + "Large.xlsx");
	  res.end(result, 'binary'); 
	}
			
    });
})

server.listen(3000);

console.log('server run in localhost:3000')