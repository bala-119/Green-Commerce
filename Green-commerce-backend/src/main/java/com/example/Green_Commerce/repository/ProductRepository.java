package com.example.Green_Commerce.repository;

import com.example.Green_Commerce.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository


public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findByCategoryId(Long categoryID);

    List<Product> findByNameContainingIgnoreCase(String name);

}
