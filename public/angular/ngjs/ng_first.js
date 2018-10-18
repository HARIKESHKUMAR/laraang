/**
 * Created by emt on 24.12.2016.
 */
var app = angular.module('myApp', []);

app.controller('PostsCtrlAjax', function($scope,$http,$rootScope) {
	
           $scope.posts={
					    "code": 200,
					    "status": "OK",
					    "category_list": [
					        {
					            "category_id": "35934",
					            "category_name": "Thriller",
					            "permalink": "thriller",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206666/original/Thriller.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "35931",
					            "category_name": "Speculative",
					            "permalink": "speculative",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206663/original/Speculative.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "34812",
					            "category_name": "FILM",
					            "permalink": "film1",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/199947/original/slide2_1525206306_1535373665_1535443531.png",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "26826",
					            "category_name": "NEW RELEASE",
					            "permalink": "amator",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206673/original/NewRelease.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "26633",
					            "category_name": "TRENDING",
					            "permalink": "cocuk",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206678/original/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI-._V1_.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "26632",
					            "category_name": "YESILCAM",
					            "permalink": "belgesel",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206677/original/DgnicVgWAAAarjt.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "26631",
					            "category_name": "HOLLYWOOD",
					            "permalink": "dizi",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206674/original/p13492451_v_v8_aa.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        },
					        {
					            "category_id": "26630",
					            "category_name": "SEE ALL PACKS",
					            "permalink": "film",
					            "category_img_url": "https://d2wk81qbuk09ji.cloudfront.net/11047/public/public/system/posters/206675/original/p12854824_v_v8_bb.jpg",
					            "cat_img_size": [
					                "390",
					                "560"
					            ]
					        }
					    ]
					}
				     	
});