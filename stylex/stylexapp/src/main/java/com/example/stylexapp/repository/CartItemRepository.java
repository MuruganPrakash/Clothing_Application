package com.example.stylexapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


import com.example.stylexapp.model.CartItem;

import jakarta.transaction.Transactional;


public interface CartItemRepository extends JpaRepository<CartItem,Integer>{
    
     List<CartItem> findByCustomerId(int userId);
     
     Optional<CartItem> findByCustomerIdAndProductId(int userId, int productId);

     // void deleteByCustomerIdAndProductId(int userId, int productId);
     // void deleteByCustomer_IdAndProduct_Id(int customerId, int productId);
     @Modifying
     @Transactional
     @Query("DELETE FROM CartItem c WHERE c.customer.id = :customerId AND c.product.id = :productId")
     void deleteByCustomer_IdAndProduct_Id(int customerId, int productId);

     @Transactional
     void deleteByCustomerId(int id);

}
