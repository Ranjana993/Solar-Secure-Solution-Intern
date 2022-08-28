$.ajax({
    type: "get",
    url: "https://themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success: function (res) {
        console.log(res.meals);
        for (var i = 0; i < res.meals.length; i++) {
            var newItems = `
                <div class="col-md-3 m-2">
                    <p>${res.meals[i].strMeal}</p>
                    <img src=${res.meals[i].strMealThumb} class="img-fluid" alt="FoodImg" />
                    <p>ID${res.meals[i].idMeal}</p>
                </div>
            `
            $('#myitem').append(newItems)
        }
    },
    error: function (err) {
        console.log(err);
    }
})