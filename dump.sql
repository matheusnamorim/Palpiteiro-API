PGDMP     7    !            
    z         
   Palpiteiro    15.1    15.1     	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16402 
   Palpiteiro    DATABASE     ?   CREATE DATABASE "Palpiteiro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "Palpiteiro";
                postgres    false            ?            1259    16515    games    TABLE       CREATE TABLE public.games (
    id integer NOT NULL,
    "teamOne" text NOT NULL,
    "teamTwo" text NOT NULL,
    type text NOT NULL,
    status boolean DEFAULT true NOT NULL,
    winner text,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.games;
       public         heap    postgres    false            ?            1259    16514    games_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.games_id_seq;
       public          postgres    false    215                       0    0    games_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;
          public          postgres    false    214            ?            1259    16541    guesses    TABLE     A  CREATE TABLE public.guesses (
    id integer NOT NULL,
    name text NOT NULL,
    "scoreboardTeamOne" integer,
    "scoreboardTeamTwo" integer,
    "winnerTeam" text NOT NULL,
    "gamesId" integer,
    "guessesRight" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.guesses;
       public         heap    postgres    false            ?            1259    16540    guesses_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.guesses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.guesses_id_seq;
       public          postgres    false    217                       0    0    guesses_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.guesses_id_seq OWNED BY public.guesses.id;
          public          postgres    false    216            j           2604    16518    games id    DEFAULT     d   ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);
 7   ALTER TABLE public.games ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            m           2604    16544 
   guesses id    DEFAULT     h   ALTER TABLE ONLY public.guesses ALTER COLUMN id SET DEFAULT nextval('public.guesses_id_seq'::regclass);
 9   ALTER TABLE public.guesses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                      0    16515    games 
   TABLE DATA                 public          postgres    false    215   ?                 0    16541    guesses 
   TABLE DATA                 public          postgres    false    217   ?                  0    0    games_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.games_id_seq', 13, true);
          public          postgres    false    214                       0    0    guesses_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.guesses_id_seq', 12, true);
          public          postgres    false    216            q           2606    16524    games games_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            postgres    false    215            s           2606    16550    guesses guesses_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.guesses
    ADD CONSTRAINT guesses_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.guesses DROP CONSTRAINT guesses_pkey;
       public            postgres    false    217            t           2606    16551    guesses guesses_gamesId_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.guesses
    ADD CONSTRAINT "guesses_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES public.games(id);
 H   ALTER TABLE ONLY public.guesses DROP CONSTRAINT "guesses_gamesId_fkey";
       public          postgres    false    215    3185    217               ?  x???Ak?0 ?{~??%-?Bғ%?;e#?Y:?tw5ւ??3Y^???c??/??V?J?R?=????xH?U>?^??j}???mi7x?w?Ag????7zwU???p}W????7S?x??f??lU?'l???3?>G?g˛y???M?:??r?G??N???i?K?T?u??>?|?ec?|F????2? ?q?c
????h??,??ݽ?f?k??̀d\??
?x8???n??G?wm??f??4?X?N	?(b~????9????v'+}????"S?S ?J"????u???ts???R??DD ????Tf??dHp??<?@?a?Gs?@b?U??<?R)c?Ӱ??щ? @E@S?fnk*o?#?cw??n?W?i?(f	?2??>w????????\a%8?g??3??????-???i??4?????\?s???e X$
????~M!?1         ?  x????J?0??=E??j??G?ī)^愭z׸?N?V???	|1??t??J?9ВI??h2;??h4)/?mw?rs????֣We?6k????o{?1MUZ???m?[????潫k??F??q??^???N?b??z?X??j????p|y6C4C?ak
#?S?6?ӣ???1+?3???#?#`???R??K)?ǽQR??87??v~?"?q??V[T?t{M0!??M<????U\*?W?҄`D*=??-???E??),?"??'??????? bD?? N!=Q?????	4)?(H??I~5ż?==4w?5???Z,sE OO???????L`ɀO?d6????????
0-?A??	?:??????unn~e?.?R	? ??????x?$ɕ(???{???     