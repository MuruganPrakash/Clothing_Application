package com.example.stylexapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.stylexapp.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer>{
    List<Product> findByTypeContainingIgnoreCaseOrBrandContainingIgnoreCase(String type, String brand);

    @Query("Select p from Product p where price between ?1 and ?2")
    List<Product> findByPrice(String start,String end);


    List<Product> findByTypeContainingIgnoreCase(String name);
    
}
