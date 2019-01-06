pragma solidity ^0.4.2;

contract Student{

    struct student{
        uint id;
        string name;
        uint SSCScore;
        uint HSCScore;
        uint aadhaarNo;
        string dateOfBirth;
        uint annualIncome;
        string education;
        string currentYear;
        scholarship stuScholarship;
    }

    struct scholarship {
        string scholarshipDetails;
    }

    mapping(uint => student) public students;
    uint public stuCount;

    function _setStudentInfo(
        string memory _name, uint SSC, uint HSC, uint aadhaar, string memory dob, uint income, 
        string memory education, string memory curYear, string memory sDetails) public{

        stuCount++;
        students[aadhaar] = student(stuCount, _name, SSC, HSC, aadhaar, dob, income, education, curYear, scholarship(sDetails));
        
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

    function getAadhaar(uint i) public view returns(uint){
        return students[i].aadhaarNo;
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

    function getsDetails(uint i) public view returns(string memory){
        return students[i].stuScholarship.scholarshipDetails;
    }

}
