pragma solidity ^0.4.2;

contract Student{

    struct student{
        uint id;
        string name;
        uint SSCScore;
        uint HSCScore;
        uint adharNo;
        string dateOfBirth;
        uint annualIncome;
        string education;
        string currentYear;
        scholarship stuScholarship;
    }

    struct scholarship {
        bool gotScholarship;
        string scholarshipDetails;
    }

    mapping(uint => student) public students;
    uint public stuCount;

    function setStudentInfo(
        string memory _name, uint SSC, uint HSC, uint aadhar, string memory dob, uint income, 
        string memory education, string memory curYear, bool sGot, string memory sDetails) public{

        stuCount++;
        students[stuCount] = student(stuCount, _name, SSC, HSC, aadhar, dob, income, education, curYear, scholarship(sGot,sDetails));
        
    }

    function getName(uint i) public view returns(string memory){
        return students[i].name;
    }
    
    function getId(uint i) public view returns(uint){
        return students[i].id;
    }

    function getSSC(uint i) public view returns(uint){
        return students[i].SSCScore;
    }

    function getHSC(uint i) public view returns(uint){
        return students[i].HSCScore;
    }

    function getAdhar(uint i) public view returns(uint){
        return students[i].adharNo;
    }

    function getDob(uint i) public view returns(string memory){
        return students[i].dateOfBirth;
    }

    function getIncome(uint i) public view returns(uint){
        return students[i].annualIncome;
    }

    function getEducation(uint i) public view returns(string memory){
        return students[i].education;
    }

    function getcurYear(uint i) public view returns(string memory){
        return students[i].currentYear;
    }

    function getScholarship(uint i) public view returns(bool){
        return students[i].stuScholarship.gotScholarship;
    }

    function getsDetails(uint i) public view returns(string memory){
        return students[i].stuScholarship.scholarshipDetails;
    }

}
