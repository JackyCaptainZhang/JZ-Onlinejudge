# SpringBoot 项目初始模板

Initial template for projects based on Java SpringBoot, integrating common frameworks and sample code for mainstream business.

Only 1 minute to complete the back-end of the content site ! People can also quickly develop their own projects on this basis.

[toc]

## Template Features

### Mainstream Frameworks & Features

- Spring Boot 2.7.x (new to thieves)
- Spring MVC
- MyBatis + MyBatis Plus data access (paging enabled)
- Spring Boot Debugging Tools and Project Processors
- Spring AOP Cutting-edge Programming
- Spring Scheduler Timed Tasks
- Spring Transaction Annotations

### Data Storage

- MySQL Database
- Redis In-Memory Database
- Elasticsearch Search Engine
- Tencent Cloud COS Object Storage

### Tools

- Easy Excel
- Hutool Tool Library
- Gson Parsing Library
- Apache Commons Lang3 Tools
- Lombok annotations

### Business Features

- Spring Session Redis distributed login
- Global request-response interceptor (logging)
- Global exception handler
- Custom error codes
- Encapsulation of generic response classes
- Swagger + Knife4j interface documentation
- Custom permissions annotations + global checksums
- Global cross-domain handling
- Long Integer Loss of Precision
- Multi-environment configuration


## Business Functions

- Provide sample SQL (users, posts, post likes, post favourites table)
- User login, registration, logout, update, retrieval, permission management.
- Post creation, deletion, editing, updating, database retrieval, ES flexible retrieval.
- Post Likes, Unlikes
- Post favourite, unfavourite, retrieve favourite posts.
- Full synchronisation of posts with ES, incremental synchronisation of ES timed tasks.
- Support WeChat open platform login
- Support WeChat public number subscription, sending/receiving messages, setting menu.
- Support uploading files by business.

### JUnit5 Unit Tests

- JUnit5 Unit Testing
- Example unit test classes

### Architecture

- Layers


## Getting Started

># All the changes that need to be made are marked with a `todo` to make it easier to find where they should be made.

### MySQL database

1) Modify the database configuration of `application.yml` to your own:

Translated with www.DeepL.com/Translator (free version)

```yml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/my_db
    username: root
    password: 123456
```

2) Execute the database statement in `sql/create_table.sql` to create the table automatically.

3) Start the project, visit `http://localhost:8101/api/doc.html` to open the interface document, you can debug the interface online without writing front-end~!

! [](doc/swagger.png)

### Redis Distributed Login

1) Modify the Redis configuration of `application.yml` to your own:

```yml
spring:
  redis:
    database: 1
    host: localhost
    port: 6379
    timeout: 5000
    password: 123456
```

2) Modify the session storage method in `application.yml`:

```yml
spring:
  session:
    store-type: redis
```

3) Remove the exclude parameter in the `@SpringBootApplication` annotation at the beginning of the `MainApplication` class:

Before modifying:

```java
@SpringBootApplication(exclude = {RedisAutoConfiguration.class})
```

After modifying:


```java
@SpringBootApplication
```

### Elasticsearch search engin

1) Modify the Elasticsearch configuration of `application.yml` to your own:

```yml
spring:
  elasticsearch:
    uris: http://localhost:9200
    username: root
    password: 123456
```

1) Copy the contents of the `sql/post_es_mapping.json` file and create the indexes by calling Elasticsearch's interface or Kibana Dev Tools (equivalent to building a table in a database)

```
PUT post_v1
{
 See sql/post_es_mapping.json file for parameters
}
```

If you don't know how to do this step, you need to add the knowledge of Elasticsearch, or Baidu by yourself~.

1) Start a sync task to sync the database posts to Elasticsearch.

Find the `FullSyncPostToEs` and `IncSyncPostToEs` files in the job directory, uncomment the `@Component` annotation, and run the program again to trigger the sync:

```java
// todo Cancellation of annotations opens the task
//@Component
```