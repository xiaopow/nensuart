# nensuart

HTML Structure

| index.html | homepage with large caruosel, featured artworks and featured artist |

| gallery.html | to list out artwork in rows |
|---| product.html | detail page of a single piece of artwork |

| artists.html | list of artists and their short bio plus link to their artwork |
|---| artist.html | detail page of a single artist |

| cart.html | shopping cart |
|---| checkout.html |

| about.html | page about nensuart and contact information |

| adminLogin.html | log in page for admin |
|---| admin.html | admin page |
|---| ad-orders.html | view and process orders |
|---| ad-products.html | view and manage products |
|---| ad-artists.html | view and manage artists |
|---| ad-admin.html | view and manage admin accounts |
|---| ad-users.html | view and manage user accounts |

### [Artworks](#artwork)
| Method | Path | Description |
|---|---|---|
| GET | /artworks | get all artworks, 10 items at a time, capability to scroll through 10 at a time for gallery.html page |
| GET | /artworks/{id} | get a specific artwork by id, for product.html page |
| GET | /artists/{name}/artwork | get all artworks of a specific artist, capability to scroll through 10 at a time, for artist.html and gallery.html page |
| POST | /artworks | add a new piece of artwork to database, require admin authentication |
| PUT | /artworks | update data of a piece of artwork, require admin authentication |
| DELETE | /artworks/{id} | delete a piece of artwork, require admin authentication |

### [Artists](#artwork)
| Method | Path | Description |
|---|---|---|
| GET | /artists | list all artists |
| GET | /artists/{name} | get a specific artist |
| POST | /artists | create a new artist, require admin authentication |
| PUT | /artists | edit a specific artist, require admin authentication |
| DELETE | /artists | delete a specific artist |

### [Admin](#admin)
| Method | Path | Description |
|---|---|---|
| GET | /admin | List all admins, require admin authentication |
| GET | /admin/{username} | List specific admin, require admin authentication |
| POST | /admin | Create a new admin, require admin authentication |
| DELETE | /admin/{username} | delete an admin, require admin authentication |

### [Admin Sessions](#adminSessions)
| Method | Path | Description |
|---|---|---|
| POST | /admin/sessions | create a new admin session |
| GET | /admin/authenicated | check if admin is authenticated |
| DELETE | /admin/sessions | delete an admin session (Logout) |

### [Users](#users)
| Method | Path | Description |
|---|---|---|
| GET | /users | List all users |
| GET | /users/{email} | Retrieve a user |
| POST | /users | Create a new user |
| PUT | /users/{email} | edit a user, require user or admin authentication |
| DELETE | /users/{email} | delete a user, require user or admin authentication |

### [User Sessions](#sessions)
| Method | Path | Description |
|---|---|---|
| POST | /sessions | Create a new session, with or without user account|
| PUT | /sessions | user sign in, check password, add user_id to anonymous session
| GET | /authenticated | Check if you are authenticated |
| DELETE | /sessions | Delete a Session, auto delete session upon closing browser if user not logged in |
| DELETE | /sessions/user | Delete a Session (Logout), activated when user clicks log out button |

### [Cart](#cart)
| Method | Path | Description |
|---|---|---|
| POST | /cart | Create a new cart, need to create session id |
| GET | /cart | get the cart with session id stored in cookie |
| GET | /cart/{id} | get a cart by id |
| PUT | /cart | edit the cart with session id stored in cookie |
| DELETE | /cart | Delete a cart |

### [Orders](#orders)
| Method | Path | Description |
|---|---|---|
| POST | /orders | Create a new order, must contain items, mailing address, billing address, customer name, date, order status |
| GET | /orders | get all orders |
| GET | /orders/{id} | get a specific order by ID |
| PUT | /orders | edit an order |
| DELETE | /orders | Delete an order |