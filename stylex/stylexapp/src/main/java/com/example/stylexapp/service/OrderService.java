package com.example.stylexapp.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.stylexapp.model.Orders;

import com.example.stylexapp.repository.OrderRepository;


@Service
public class OrderService {
    public OrderRepository OrderRepository;
    
    public OrderService(OrderRepository OrderRepository)
    {
        this.OrderRepository = OrderRepository;
        
    }

    public Orders saveOrder(Orders order) {
        if (!OrderRepository.existsById(order.getId())) {
            return OrderRepository.save(order);
        } else {
            return null;
        }
    }
    public List<Orders> getOrders() {
        return OrderRepository.findAll();
    }

    public Orders getOrder(int id) {
        return OrderRepository.findById(id).orElse(null);
    }   

    public Orders findOrder(int id) {
        return OrderRepository.findById(id).orElse(null);
    }
}
