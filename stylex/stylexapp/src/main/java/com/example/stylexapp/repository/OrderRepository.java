package com.example.stylexapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.stylexapp.model.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer>{
    

}