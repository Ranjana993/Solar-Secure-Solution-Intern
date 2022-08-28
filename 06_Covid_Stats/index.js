$.ajax({
    type: "get",
    url: "https://api.covid19api.com/summary",
    success: function (res) {
        console.log(res.Countries);
        for (var i = 0; i < res.Countries.length; i++) {
            var TotalActive = res.Countries[i].TotalConfirmed - res.Countries[i].TotalRecovered

            var tableRow = `<tr> 
                <td>${res.Countries[i].Country}</td>
                <td>${res.Countries[i].TotalConfirmed}</td>
                <td>${TotalActive}</td>
                <td>${res.Countries[i].TotalRecovered}</td>
                <td>${res.Countries[i].TotalDeaths}</td>
            </tr>`
            $('#tbody').append(tableRow)
        }
        $('#covidstats').DataTable()
    },
    error: function (err) {
        console.log(err);
    }
})