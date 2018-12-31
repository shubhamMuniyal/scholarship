$(function() {
    $(window).load(function() {
        App.init();
    });
});

App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
  
    init: function() {
        return App.initWeb3();
    },
  
    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            // If a web3 instance is already provided by Meta Mask.
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } 
        else {
            // Specify default instance if no web3 instance provided
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
        return App.initContract();
    },
  
    initContract: function() {
        $.getJSON("Student.json", function(Student) {
            // Instantiate a new truffle contract from the artifact
            App.contracts.Student = TruffleContract(Student);
            // Connect provider to interact with contract
            App.contracts.Student.setProvider(App.web3Provider);
        });
    },

    showStudentInfo: function() {
        App.contracts.Student.deployed().then((student) =>{
            var aadhar = $("#aadharNo").val();
            student.getStudentInfo(aadhar).then((result, error)=>{
                console.log(result);
                console.log(error);
            });
        });
    },

    setStudentInfo: function() {
        App.contacts.Student.deployed().then((student)=>{
            var name = $("#name").val();
            var ten = $("#ssc_per").val();
            var tw = $("#hsc_per").val();
            var aadhar = $("#aadhar").val();
            var dob = $("#dob").val();
            var fi = $("#income").val();
            var edu = $("#edu").val();
            var yearedu = $("#year_edu").val();
            var sgot = $("#scholarship_got").val();
            var sd = $("#scholarship_info").val();
            student.setStudentInfo(name,ten,tw,aadhar,dob,fi,edu,yearedu,sgot,sd);
        });
    }
};
  
  