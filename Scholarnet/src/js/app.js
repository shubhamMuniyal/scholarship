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
            var aadhaar = $("#aadhaarNo").val();
            student.getName(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Name:"+result+"<br>");
                console.log(error);
            });

            student.getId(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("ID:"+result+"<br>");
                console.log(error);
            });

            student.getSSC(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("SSC percentage:"+result+"<br>");
                console.log(error);
            });

            student.getHSC(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("HSC percentage:"+result+"<br>");
                console.log(error);
            });

            student.getAadhaar(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Aadhaar card number:"+result+"<br>");
                console.log(error);
            });

            student.getDob(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Date of birth:"+result+"<br>");
                console.log(error);
            });

            student.getIncome(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Family Income:"+result+"<br>");
                console.log(error);
            });

            student.getEducation(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Current Education:"+result+"<br>");
                console.log(error);
            });

            student.getcurYear(aadhaar).then((result, error)=>{
                console.log(result);
                $("#details").append("Current education year:"+result+"<br>");
                console.log(error);
            });

            student.getsDetails(aadhaar).then((result, error)=>{
                console.log(result);
                if(result = ""){
                    result = "none";
                }
                $("#details").append("Other Scholarship details:"+result+"<br>");
                console.log(error);
            });

        });
    },

    setStudentInfo: function() {
        App.contracts.Student.deployed().then((student) =>{
            var name = $("#name").val();
            var ten = $("#ssc_per").val();
            var tw = $("#hsc_per").val();
            var aadhaar = $("#aadhaar").val();
            var dob = $("#dob").val();
            var fi = $("#income").val();
            var edu = $("#edu").val();
            var yearedu = $("#year_edu").val();
            //var sgot = $("#scholarship_got").val();
            var sd = $("#scholarship_info").val();

            $("#aadhaarValid").text("");
            if(!(/^\d{4}\d{4}\d{4}$/.test(aadhaar))){

                console.log("nope");
                var aadhaarmsg = "Enter valid Aadhaar number";
                $("#aadhaarValid").append(aadhaarmsg);
            }
            else{
                $("#aadhaarValid").text("");
                student._setStudentInfo(name,ten,tw,aadhaar,dob,fi,edu,yearedu,sd);
            }
        });
    },
};
  
  
