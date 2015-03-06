 
    /* Initialize App */
    init = function () {
          
        updateTagLine();
        setCurrentDate();
 
        var currentIssue = 0; 
        getPosterData(currentIssue);

     }
  
    /* Update Tagline */
    updateTagLine = function () {
         
        $(".tag-line").html(config.tagLine); 
    }

    /* Display the Browser Date. */
    setCurrentDate = function () {

        var d             = new Date();
        var weekDay       = config.daysOfTheWeek[d.getDay()];
        var date          = d.getDate(); 
        var month         = config.months[d.getMonth()]; 
        var year          = d.getFullYear();
        var dateHTML      = weekDay + ", <span>" + month + " " + date + " " + year + "</span>";

        $(".current-date").html(dateHTML);
    }

    getPosterData = function (currentIssue) {

        // Retrieve Data from Contentful 
        //var dataURL = config.contentful.cdn + "/" + config.contentful.space + "/entries?access_token=" + config.contentful.access_token;
        var dataURL = config.contentful.cdn + "/" + config.contentful.space + "/entries?content_type=5Rn2QUQQ6cqKWGEScuOsMc&access_token=" + config.contentful.access_token;;
        console.log("Data URL-->");
        console.log(dataURL);

        
        // Get Assets 
        var assetURL = config.contentful.cdn + "/" + config.contentful.space + "/assets?access_token=" + config.contentful.access_token;
        var assets = {};
        $.get(assetURL, function (response, status) {

            for (var i = 0; i < response.items.length; i++){
                
                assets[response.items[i].sys.id] = {
                    "title": response.items[i].fields.title,
                    "url":   response.items[i].fields.file.url
                };
             }
 
             // Get Data 
            $.get(dataURL, function (response, status) {
                 
                data.issues.push({ "issue": "May 2015", "posters": [], "featured": [], "fashion": [] });
 
                for (var i = 0; i < response.items.length; i++) {

                    var obj = response.items[i].fields;

               
                    var date = new Date(Date(obj.datePublished.toString()));
                     
                    switch (obj.type) {
                    
                        case "Poster":

                            data.issues[currentIssue].posters.push(
                             {
                                 "section": obj.section,
                                 "title": obj.title,
                                 "datePublished": obj.datePublished,
                                 "day": date.getDay(),
                                 "month": config.months[date.getMonth()],
                                 "posterUrl": "http:" + assets[obj.url[0].sys.id].url,
                                 "thumbUrl": "http:" + assets[obj.url[1].sys.id].url,
                                 "displayOrder": obj.displayOrder,
                                 "description": obj.description,
                                 "author": obj.author
                              });
 
                            break;

                        case "Featured":

                            data.issues[currentIssue].featured.push(
                             {
                                 "section": obj.section,
                                 "title": obj.title,
                                 "datePublished": obj.datePublished,
                                 "day": date.getDay(),
                                 "month": config.months[date.getMonth()],
                                 "posterUrl": "http:" + assets[obj.url[0].sys.id].url,
                                 "displayOrder": obj.displayOrder,
                                 "description": obj.description,
                                 "author": obj.author
                             });
                             
                            break;

                        case "Fashion":

                            data.issues[currentIssue].fashion.push(
                             {
                                 "section": obj.section,
                                 "title": obj.title,
                                 "datePublished": obj.datePublished,
                                 "day": date.getDay(),
                                 "month": config.months[date.getMonth()],
                                 "posterUrl": "http:" + assets[obj.url[0].sys.id].url,
                                 "displayOrder": obj.displayOrder,
                                 "description": obj.description,
                                 "author": obj.author
                             });

                            break;



                    
                    }

                  
                 }

                // Sort data by order id
                data.issues[currentIssue].posters  = sortByKey(data.issues[currentIssue].posters,  data.issues[currentIssue].posters.displayOrder);
                data.issues[currentIssue].featured = sortByKey(data.issues[currentIssue].featured, data.issues[currentIssue].featured.displayOrder);
                data.issues[currentIssue].fashion  = sortByKey(data.issues[currentIssue].fashion,  data.issues[currentIssue].fashion.displayOrder);
                 
                // Update DOM    

                // Posters
                for (var i = 0; i < data.issues[currentIssue].posters.length; i++) {

                    var title         = data.issues[currentIssue].posters[i].title;
                    var section       = data.issues[currentIssue].posters[i].section;
                    var datePublished = data.issues[currentIssue].posters[i].datePublished;
                    var day           = data.issues[currentIssue].posters[i].day;
                    var month         = data.issues[currentIssue].posters[i].month;
                    var imageUrl      = data.issues[currentIssue].posters[i].posterUrl;
                    var imageUrl      = data.issues[currentIssue].posters[i].posterUrl;
                    var thumbUrl      = data.issues[currentIssue].posters[i].thumbUrl;

                    addPosterItem(title, section, month, day, imageUrl, thumbUrl);
                }


                // Featured
                for (var i = 0; i < data.issues[currentIssue].featured.length; i++) {

                    var title         = data.issues[currentIssue].featured[i].title;
                    var section       = data.issues[currentIssue].featured[i].section;
                    var datePublished = data.issues[currentIssue].featured[i].datePublished;
                    var day           = data.issues[currentIssue].featured[i].day;
                    var month         = data.issues[currentIssue].featured[i].month;
                    var imageUrl      = data.issues[currentIssue].featured[i].posterUrl;
                    var imageUrl      = data.issues[currentIssue].featured[i].posterUrl;
                    var thumbUrl      = data.issues[currentIssue].featured[i].thumbUrl;
                    var description   = data.issues[currentIssue].featured[i].description;
                    var author        = data.issues[currentIssue].featured[i].author;
                     
                    var index = (i+1); 
                    addFeaturedItem(index, title, section, month, day, imageUrl, thumbUrl, datePublished, description, author);
                }

                // Fashion
                for (var i = 0; i < data.issues[currentIssue].fashion.length; i++) {

                    var title         = data.issues[currentIssue].fashion[i].title;
                    var section       = data.issues[currentIssue].fashion[i].section;
                    var datePublished = data.issues[currentIssue].fashion[i].datePublished;
                    var day           = data.issues[currentIssue].fashion[i].day;
                    var month         = data.issues[currentIssue].fashion[i].month;
                    var imageUrl      = data.issues[currentIssue].fashion[i].posterUrl;
                    var imageUrl      = data.issues[currentIssue].fashion[i].posterUrl;
                    var thumbUrl      = data.issues[currentIssue].fashion[i].thumbUrl;
                    var description   = data.issues[currentIssue].fashion[i].description;
                    var author        = data.issues[currentIssue].fashion[i].author;

                    addFashionItem(title, section, month, day, imageUrl, thumbUrl, datePublished, description, author);
                }



 
            });
  
        });

    }
  

    sortByKey = function(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    addPosterItem = function (title, section, month, day, imageUrl, thumbUrl) {
 
        var html = ''; 
        html += '<div class="item">';
        html += '<article class="entry-item">';
        html += '<div class="entry-thumb">';
        html += '<a href="#"><img src="'+ imageUrl +'" alt=""></a>';
        html += '<div class=""></div>';
        html += ' </div>';
        html += '<div class="entry-content">';
        html += '<div class="entry-date style1">';
        html += '<span class="entry-day">'+ day +'</span>';
        html += '<span class="entry-month">' + month +  '</span>';
        html += '</div>';
        html += '<div class="bg-content">';
        html += '<h2 class="entry-categories"><a href="#">'+ section +'</a></h2>';
        html += '<h3 class="entry-title"><a href="#"><span id="music-entry-title">"'+ title +'"</span></a></h3>';
        html += '<a href="#" class="more-link">Read more</a>'; 
        html += '</div>';
        html += '</div>';
        html += '</article>';
        html += '</div>';
   
        // Add Poster
        $("#music-posters").append(html);

        var thumbHTML = '<div class="item"><img src="' + thumbUrl + '" alt=""></div>';
        // Add Thumbnail 
        $("#thumbnail").append(thumbHTML);
        
    }


    addFeaturedItem = function (index, title, section, month, day, imageUrl, thumbUrl, datePublished, description, author) {

        var html = '';
  
        html += '<article class="entry-item standard-post">';
        html += '<div class="entry-thumb">';
        html += '<a href="#"><img src="'+ imageUrl +'" alt=""></a>';
        html += '<span class="thumb-icon"></span>';
        html += '</div>';
        html += '<div class="entry-content">';
        html += '<h3 class="entry-title"><a href="#">'+ title +'</a></h3>';
        html += '<p class="entry-date style2">'+ datePublished +'</p>';
        html += '<p>'+ description +'</p>';
        html += '<span class="entry-author">By: <a href="#">'+ author +'</a></span>';
        html += '</div>';
        html += '<a href="#" class="more-link style2">';
        html += '<span class="fa fa-long-arrow-right"></span>';
        html += '<span>Read more</span>';
        html += '</a>';
        html += '</article>';
 
        // Add Poster
        $("#featured_" + index).append(html);
 
    }

    addFashionItem = function (index, title, section, month, day, imageUrl, thumbUrl, datePublished, description, author) {

        var html = '';  

        html += '<div class="item">'; 
        html += '<article class="entry-item">';
        html += '<div class="entry-thumb">';
        html += '<a href="#"><img src="'+ imageUrl +'" alt=""></a>';
        html += '<div class="thumb-hover"></div>';
        html += '</div>';
        html += '<div class="entry-content">';
        html += '<h2 class="entry-categories"><a href="#">'+ section +'</a></h2>';
        html += '<h3 class="entry-title"><a href="#">'+ description +'</a></h3>'; 
        html += '</div>';
        html += '</article>';
        html += '</div>'; 
 
        // Add Poster
        $("#Fashion-Poster").append(html);

    }
  
    document.addEventListener("DOMContentLoaded",init);