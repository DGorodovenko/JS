class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._Doctor = Doctor;
    this._Nurse = Nurse;
    this._remainingVacationDays = 20;
  }

  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

class Doctor extends HospitalEmployee{
  onstructor (name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
}

class Nurse extends HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
}
