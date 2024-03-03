package com.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.entities.Prescription;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Integer> {

}
