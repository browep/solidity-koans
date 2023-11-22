pragma solidity ^0.8.9;

struct Person {
    uint age;
    uint height;
}

contract SimpleStruct {

    Person myPerson = Person(40, 100);

    function getPersonAge() public view returns (uint)  {
        // get the age of the person struct
        return ???;
    }

    function getPersonHeight() public view returns (uint) {
        // get the height of the person struct
        return ???;
    }
}
