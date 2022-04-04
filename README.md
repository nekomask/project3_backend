# project3_backend

My project "My Bike Database" is an application for storing component data for users bicycles.

# Background
The idea comes from my own personal history of putting together and repairing my own bicycles over the years.

One might think that bicycles have been around long enough for all parts to have become standardized, interchangeable, and one-size fits all.

While some parts can be interchangeable depending on compatability, one size certainly doesn't fit all (except for maybe an accessory like a bike light).

I personally wanted to make an application like this to help me remember my own schematics for my different bicycles because you wouldn't think it- but it can be a real pain to measure something like even a spoke if you happen to need a replacement. But you can't even order one until you're sure what exact size you need. Who wants to do that? 

With this application, you can store your bike data and update it over time, sparing yourself wasted hours of disassembling your headset or accidentally ordering the wrong component.

# Technologies

This full CRUD application is powered mainly by React, Express, and MongoDB in storing form data objects to a server and fetching that API data to be updated or deleted.

There is a backend using express that manages the controller routes and the schema while the frontend uses React to give users a unique experience.

I also used a little JQuery and DOM manipulation on the splash page that allows users to change the (background) color of different bicycle frames.


# Notes
Because I think making a glorified spreadsheet of very detailed bike component specifications can be an incredibly dry subject (even for myself who actually finds it relevant), I wanted to implement something fun and interactive for people who aren't autistic about their bikes-- that's why I came up with the splash page where people can cycle through some different bike frames and see how they look in different colors. That actually turned out to be the most rewarding part of this project to me. It would be cool in the future to save the state of this image's color/frametype and have it be a part of each individual bike's show page. 

There are also some icons in the create-form that link to some helpful resources for normal people who don't know what all that bike jargon means. I do plan to add more icons with links in the future as well.

While the MVP was reached, this application is still very much a work in progress. Two big features that I'm hoping to add next would be rendering a show page for created objects (a user's bike). Then once I have that functionality in place, I would move on to letting users create accounts and login. I had some trouble figuring out how to get Router React dom map for item._id-- I know it has to involve hooks and props but just couldn't get there in time. I also plan to rehaul the style of the create page-- I waited to work on style last because I just wanted to focus on functionality for this project and managing all the object properties.

I also hate to say it but there's still so many properties to be added. I can already tell that I will eventually have a hard time drawing the line on what becomes too impractical and minute to include in the list as it's not really my intention to include every minute detail on a bike-- but mostly just things require specific compatability and a person wouldn't want to measure more than once.

# Links

Heroku backend: https://my-bike-database-backend.herokuapp.com/

Heroku frontend: https://my-bike-database-frontend.herokuapp.com/