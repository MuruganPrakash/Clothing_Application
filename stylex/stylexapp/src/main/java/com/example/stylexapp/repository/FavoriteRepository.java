package com.example.stylexapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.stylexapp.model.Favorite;


import jakarta.transaction.Transactional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite,Integer>{
     List<Favorite> findByCustomerId(int userId);
     
     Optional<Favorite> findByCustomerIdAndProductId(int userId, int productId);

    
     @Modifying
     @Transactional
     @Query("DELETE FROM Favorite c WHERE c.customer.id = :customerId AND c.product.id = :productId")
     void deleteByCustomer_IdAndProduct_Id(int customerId, int productId);

}
