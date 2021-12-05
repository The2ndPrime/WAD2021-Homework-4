-- Table: public.posts

DROP TABLE public.posts;

CREATE TABLE public.posts
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    avatar_url character varying COLLATE pg_catalog."default",
    avatar_name character varying COLLATE pg_catalog."default",
    media_type character varying COLLATE pg_catalog."default" DEFAULT ''::character varying,
    media_url character varying COLLATE pg_catalog."default" DEFAULT ''::character varying,
    likes integer DEFAULT 0,
    title character varying COLLATE pg_catalog."default",
    body character varying COLLATE pg_catalog."default",
    create_time timestamp without time zone DEFAULT CURRENT_TIMESTAMP(0),
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.posts
    OWNER to postgres;
	
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://www.writeups.org/wp-content/uploads/Gordon-Freeman-Half-Life-Portrait-1.jpg', 'Gordon Freeman', 'jpg', 'https://c.stocksy.com/a/Qh5300/z9/736896.jpg', 'RAIN!', 'Feels like it is going to rain soon');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpg', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg', 'The weight of guilt', 'Which weighs more, a pound of feathers or a pound of bricks?\nA pound of feathers because you have to carry the feathers and \nthe weight of what you did to those poor birds');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpg', 'https://www.giantfreakinrobot.com/wp-content/uploads/2021/06/ben-affleck-batman.jpg', ':*', 'Felt cute, might delete later');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpg', 'https://www.petmd.com/sites/default/files/styles/article_image/public/kitten-playing-yarn.jpg?itok=Xl7D1DhW', 'Fluffy nuclear reactor', 'My new kitten just cannot stop playing, where does all of this energy come from?');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg', 'Katie Smith', 'jpg', 'https://www.brown.edu/sites/g/files/dprerj316/files/styles/wide_lrg/public/2019-04/textbooks_0.jpg?h=a195ebb2&itok=VQSZrlca', 'I HATE exams', 'Anyone else feeling nervous about the test tomorrow? Feels like I have studied for ages.');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg', 'Katie Smith', 'jpg', 'https://image.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg', 'Exam? Easy! Party? Hell yeah!', 'Well, that test was easier than I thought. Anyone up for celebrating tonight?');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg', 'Katie Smith', 'png', 'https://craigies.co.uk/wp-content/uploads/2020/06/Birthday-Cake-e1612181292233-900x1024.png', 'Happy Birthday!', 'Happy Birthday, Annie! Thanks for all the lovely memories!');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpg', 'https://images.immediate.co.uk/production/volatile/sites/4/2013/04/GettyImages-640318118-c83a508.jpg', 'Sunset', 'Caught this beautiful sunset tonight');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpeg', 'https://market-dev.edcwallet.io/wp-content/uploads/2020/04/pasta-1.jpeg', 'Comfort food', 'What are your favourite comfort foods you fall back to during stressful times? \nMine will always be a bowl of pasta with shredded cheese.');
insert into posts (avatar_url, avatar_name, media_type, media_url, title, body) values ('https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg', 'Batman', 'jpg', 'https://www.gardeningknowhow.com/wp-content/uploads/2018/06/fall-leaves.jpg', 'October!', 'First day of October! What are your favourite things about autumn?');
