var express             = require('express');
var Router              = express.Router();
var passport            = require('passport');

var DashboardController = require('../controllers/DashboardController');
var Dashboard           = new DashboardController();
var DashboardMapController = require('../controllers/DashboardMapController');
var DashboardMap           = new DashboardMapController();
var RequestFundController = require('../controllers/RequestFundController');
var RequestFund = new RequestFundController();
var MapController = require('../controllers/MapController');
var Map = new MapController();
var CustomerController  = require('../controllers/CustomerController');
var Customer            = new CustomerController();
var CustomerCompanyController = require('../controllers/CustomerCompanyController');
var CustomerCompany = new CustomerCompanyController;
var EmployeeController  = require('../controllers/EmployeeController');
var Employee            = new EmployeeController();
var AreaController      = require('../controllers/AreaController');
var Area                = new AreaController();
var OperatorController  = require('../controllers/OperatorController');
var Operator            = new OperatorController();
var TrainingController = require('../controllers/TrainingController');
var Training            = new TrainingController();
var HolidayController   = require('../controllers/HolidayController');
var Holiday             = new HolidayController();
var PositionController  = require('../controllers/PositionController');
var Position            = new PositionController();
var SsowController      = require('../controllers/SsowController');
var Ssow                = new SsowController();
var InventoryController = require('../controllers/InventoryController');
var Inventory           = new InventoryController();
var VehicleController   = require('../controllers/VehicleController');
var Vehicle             = new VehicleController();
var ProjectListController   = require('../controllers/ProjectListController');
var ProjectList             = new ProjectListController();
var ProjectSubconController = require('../controllers/ProjectSubconController');
var ProjectSubcon = new ProjectSubconController();
var ProjectExpenseController = require('../controllers/ProjectExpenseController');
var ProjectExpense = new ProjectExpenseController();
var ProjectProgressController = require('../controllers/ProjectProgressController');
var ProjectProgress = new ProjectProgressController();
var ProjectReportController = require('../controllers/ProjectReportController');
var ProjectReport           = new ProjectReportController();
var UserController      = require('../controllers/UserController');
var User                = new UserController();
var RoleController      = require('../controllers/RoleController');
var Role                = new RoleController();
var FunctionsController      = require('../controllers/FunctionsController');
var Functions                = new FunctionsController();


var GmpmActivityController  = require('../controllers/GmpmActivityController');
var GmpmActivity        = new GmpmActivityController();
var GmpmEvaluationController  = require('../controllers/GmpmEvaluationController');
var GmpmEvaluation        = new GmpmEvaluationController();
var GmpmKpiController = require('../controllers/GmpmKpiController');
var GmpmKpi = new GmpmKpiController();
var EmployeeEvaluationController = require('../controllers/EmployeeEvaluationController');
var EmployeeEvaluation = new EmployeeEvaluationController();
var EmployeePerformanceController = require('../controllers/EmployeePerformanceController');
var EmployeePerformance = new EmployeePerformanceController();
var GpsDeviceController = require('../controllers/GpsDeviceController');
var GpsDevice           = new GpsDeviceController();
var KpiController       = require('../controllers/KpiController');
var Kpi                 = new KpiController();
var RevenueController   = require('../controllers/RevenueController');
var Revenue             = new RevenueController();
var SubconController    = require('../controllers/SubconController');
var Subcon              = new SubconController();


var Connection = require('../config/database');

Router.get('/map', Map.index);

Router.get('/dashboard', Dashboard.index);
Router.get('/dashboard_map', DashboardMap.index);
//Router.get('/dashboard/')


Router.get('/request_fund', RequestFund.index);
Router.get('/request_fund/:id', RequestFund.findById);
Router.get('/request_fund', RequestFund.createData);
Router.put('/request_fund/:id', RequestFund.updateDataById);
Router.delete('/request_fund/:id', RequestFund.deleteDataById);

/**
 * Route REST API For <http://host:/<employee>/<query> Uri
 * @uri
 * @api
 */
Router.get('/employee', Employee.index);
Router.get('/employee/:id', Employee.findById);
Router.post('/employee', Employee.createData);
Router.put('/employee/:id', Employee.updateDataById);
Router.delete('/employee/:id', Employee.deleteDataById);
Router.get('/employeeGm/', Employee.findGm);//get GM for User

/**
 * Route REST API For <http://host:/customer/<query>
 * @uri
 * @api
 */
//Router.all('/customer', authenticatedLogin);
Router.get('/customer', Customer.index);
Router.get('/customer/:id', Customer.findById);
Router.post('/customer', Customer.createData);
Router.put('/customer/:id', Customer.updateDataById);
Router.delete('/customer/:id', Customer.deleteDataById);
/**
 * Route REST API For <http://host:/customer_company/<query>
 * @uri
 * @api
 */
Router.get('/customer_company', CustomerCompany.index);
Router.get('/customer_company/:id', CustomerCompany.findById);
Router.post('/customer_company', CustomerCompany.createData);
Router.put('/customer_company/:id', CustomerCompany.updateDataById);
Router.delete('/customer_company/:id', CustomerCompany.deleteDataById);
/**
 * Route REST API For <http://host:/area/<query>
 * @uri
 * @api
 */
Router.get('/area', Area.index);
Router.get('/area/:id', Area.findById);
Router.post('/area',Area.createData);
Router.put('/area/:id',Area.updateDataById);
Router.delete('/area/:id',Area.deleteDataById);
/**
 * Route REST API For <http://host:/operator/<query>
 * @uri
 * @api
 */
Router.get('/operator', Operator.index);
Router.get('/operator/:id', Operator.findById);
Router.post('/operator', Operator.createData);
Router.put('/operator/:id', Operator.updateDataById);
Router.delete('/operator/:id', Operator.deleteDataById);


Router.get('/training', Training.index);
Router.get('/training/:id', Training.findById);
Router.post('/training', Training.createData);
Router.put('/training/:id', Training.updateDataById);
Router.delete('/training/:id', Training.deleteDataById);


Router.get('/holiday', Holiday.index);
Router.get('/holiday/:id', Holiday.findById);
Router.post('/holiday', Holiday.createData);
Router.put('/holiday/:id', Holiday.updateDataById);
Router.delete('/holiday/:id', Holiday.deleteDataById);
/**
 * Route REST API For <http://host:/position/<query>
 * @uri
 * @api
 */
Router.get('/position', Position.index);
Router.get('/position/:id', Position.findById);
Router.post('/position',Position.createData);
Router.put('/position/:id',Position.updateDataById);
Router.delete('/position/:id',Position.deleteDataById);
/**
 * Route REST API For <http://host:/inventory/<query>
 * @uri
 * @api
 */
Router.get('/inventory', Inventory.index);
Router.get('/inventory/:id',Inventory.findById);
Router.post('/inventory', Inventory.createData);
Router.put('/inventory/:id', Inventory.updateDataById);
Router.delete('/inventory/:id',Inventory.deleteDataById);

Router.get('/vehicle', Vehicle.index);
Router.get('/vehicle/:id', Vehicle.findById);
Router.post('/vehicle', Vehicle.createData);
Router.put('/vehicle/:id', Vehicle.updateDataById);
Router.delete('/vehicle/:id', Vehicle.deleteDataById);

Router.get('/ssow', Ssow.index);
Router.get('/ssow/:id', Ssow.findById);
Router.post('/ssow', Ssow.createData);
Router.put('/ssow/:id', Ssow.updateDataById);
Router.delete('/ssow/:id', Ssow.deleteDataById);

Router.get('/project_list', ProjectList.index);
Router.get('/project_list/:id', ProjectList.findById);
Router.post('/project_list', ProjectList.createData);
Router.put('/project_list/:id', ProjectList.updateDataById);
Router.delete('/project_list/:id',ProjectList.deleteDataById);
Router.get('/project_coordinat',ProjectList.getCoordinat);

Router.get('/project_expense', ProjectExpense.index);
Router.get('/project_expense/:id', ProjectExpense.findById);
Router.post('/project_expense', ProjectExpense.createData);
Router.put('/project_expense/:id', ProjectExpense.updateDataById);
Router.delete('/project_expense/:id',ProjectExpense.deleteDataById);

Router.get('/project_progress',ProjectProgress.index);
Router.get('/project_progress/:id', ProjectProgress.findById);
Router.post('/project_progress',ProjectProgress.createData);
Router.put('/project_progress/:id', ProjectProgress.updateDataById);
Router.delete('/project_progress/:id', ProjectProgress.deleteDataById);

Router.get('/project_report', ProjectReport.index);
Router.get('/project_report/:id', ProjectReport.findById);
Router.post('/project_report', ProjectReport.createData);
Router.put('/project_report/:id', ProjectReport.updateDataById);
Router.delete('/project_report/:id', ProjectReport.deleteDataById);

Router.get('/project_subcon', ProjectSubcon.index);
Router.get('/project_subcon/:id', ProjectSubcon.findById);
Router.post('/project_subcon', ProjectSubcon.createData);
Router.put('/project_subcon/:id', ProjectSubcon.updateDataById);
Router.delete('/project_subcon/:id',ProjectSubcon.deleteDataById);

Router.get('/user', User.index);
Router.get('/user/:id', User.findById);
Router.post('/user', User.createData);
Router.put('/user/:id', User.updateDataById);
Router.delete('/user/:id',User.deleteDataById);

Router.get('/role', Role.index);
Router.get('/role/:id', Role.findById);
Router.post('/role', Role.createData);
Router.put('/role/:id',Role.updateDataById);
Router.delete('/role/:id', Role.deleteDataById);

Router.get('/functions', Functions.index);
Router.get('/functions/:id', Functions.findById);
Router.post('/functions', Functions.createData);
Router.put('/functions/:id',Functions.updateDataById);
Router.delete('/functions/:id', Functions.deleteDataById);

/**
 * Route REST API For <http://host:/<gmpm_activity>/<query> Uri
 * @uri
 * @api
 */
Router.get('/gmpm_activity', GmpmActivity.index);
Router.get('/gmpm_activity/:id', GmpmActivity.findById);
Router.post('/gmpm_activity', GmpmActivity.createData);
Router.put('/gmpm_activity/:id', GmpmActivity.updateDataById);
Router.delete('/gmpm_activity/:id',GmpmActivity.deleteDataById);

/**
 * Route REST API For <http://host:/<gmpm_evaluation>/<query> Uri
 * @uri
 * @api
 */

Router.get('/gmpm_evaluation', GmpmEvaluation.index);
Router.get('/gmpm_evaluation/:id',GmpmEvaluation.findById);
Router.post('/gmpm_evaluation', GmpmEvaluation.createData);
Router.put('/gmpm_evaluation/:id', GmpmEvaluation.updateDataById);
Router.delete('/gmpm_evaluation/:id', GmpmEvaluation.deleteDataById);

Router.get('/gmpm_kpi', GmpmKpi.index);
Router.get('/gmpm_kpi/:id',GmpmKpi.findById);
//Router.post('/gmpm_kpi', GmpmKpi.createData);
//Router.put('/gmpm_kpi/:id', GmpmKpi.updateDataById);
//Router.delete('/gmpm_kpi/:id', GmpmKpi.deleteDataById);

Router.get('/employee_evaluation', EmployeeEvaluation.index);
Router.get('/employee_evaluation/:id',EmployeeEvaluation.findById);
Router.post('/employee_evaluation', EmployeeEvaluation.createData);
Router.put('/employee_evaluation/:id', EmployeeEvaluation.updateDataById);
Router.delete('/employee_evaluation/:id', EmployeeEvaluation.deleteDataById);

Router.get('/employee_performance', EmployeePerformance.index);
Router.get('/employee_performance/:id',EmployeePerformance.findById);
Router.post('/employee_performance', EmployeePerformance.createData);
Router.put('/employee_performance/:id', EmployeePerformance.updateDataById);
Router.delete('/employee_performance/:id', EmployeePerformance.deleteDataById);

Router.get('/gps_device', GpsDevice.index);
Router.get('/gps_device/:id', GpsDevice.findById);
Router.post('/gps_device', GpsDevice.createData);
Router.put('/gps_device/:id', GpsDevice.updateDataById);
Router.delete('/gps_device/:id', GpsDevice.deleteDataById);

Router.get('/kpi', Kpi.index);

Router.get('/revenue', Revenue.index);

Router.get('/subcon', Subcon.index);

Router.get('/map_data', function(req, res){
    res.status(200).sendFile(__dirname + '/map2.geojson');
});

Router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/src/#/dashboard',
    failureRedirect: '/src/#/access/signin',
    failureFlash: true
}), function(req, res) {
    if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
        req.session.cookie.expires = false;
    }

    res.redirect('/');
});

function AuthFilter(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/src/#/access/signin');
}

module.exports = Router;
