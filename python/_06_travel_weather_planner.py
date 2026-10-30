#User Stories:

#You should create the following variables:
#distance_mi (a number representing the distance to travel in miles)
#is_raining (a boolean representing if the user is currently experiencing rainy weather)
#has_bike (a boolean representing if the user has a bicycle)
#has_car (a boolean representing if the user has a car)
#has_ride_share_app (a boolean representing if the user has an app that allows them to request a ride)
#You should use conditional statements to determine whether commuting is possible based on the values of these variables.
#You should use if, elif, and else statements to evaluate the distance categories in ascending order.
#You should use at least one boolean operator (and, or, or not) in your code.
#If distance_mi is a falsy value:
#You should print False.
#If the distance is less than or equal to 1 mile:
#You should print True only if it is not raining.
#Otherwise, you should print False.
#If the distance is greater than 1 mile and less than or equal to 6 miles:
#You should print True only if the person has a bike and it is not raining.
#Otherwise, you should print False.
#If the distance is greater than 6 miles:
#You should print True if the person has a car or has a ride-share app.
#Otherwise, you should print False.

distance_mi = 5
is_raining = False
has_bike = True
has_car = False
has_ride_share_app = True
