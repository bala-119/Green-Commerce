package com.example.Green_Commerce.service;


import com.example.Green_Commerce.model.Product;
import com.example.Green_Commerce.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> getAllProducts()
    {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id)
    {
        return productRepository.findById(id);
    }

    public void deleteProduct(Long id)
    {
        productRepository.deleteById(id);
    }

    public List<Product> getProductByCategory(Long CategoryId)
    {
        return productRepository.findByCategoryId(CategoryId);
    }

    public List<Product> searchProducts(String name) {
        return productRepository.findByNameContainingIgnoreCase(name);
    }

}
