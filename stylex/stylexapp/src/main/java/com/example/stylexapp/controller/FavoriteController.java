package com.example.stylexapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.stylexapp.model.Favorite;
import com.example.stylexapp.service.FavoriteService;
@RestController
@CrossOrigin
public class FavoriteController {

    @Autowired
    private FavoriteService FavoriteService;

    @GetMapping("getFavorite/{userId}")
    public List<Favorite> getFavoriteItems(@PathVariable int userId) {
        return FavoriteService.getFavorites(userId);
    }

    @PostMapping("/addFavorite")
    public Favorite addFavoriteItem(@RequestParam int userId, @RequestParam int productId) {
        return FavoriteService.addToFavorite(userId, productId);
    }

    @DeleteMapping("/removeFavorite")
    public String removeFromFavorite(@RequestParam int userId, @RequestParam int productId) {
        FavoriteService.removeFromFavorite(userId, productId);
        return "Deleted succesfully";
    }

   
}
