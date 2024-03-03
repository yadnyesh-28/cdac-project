package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.entities.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

}
