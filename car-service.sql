PGDMP     .    ;                {            car_service_db    15.4    15.3 7    ;           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            <           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            =           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            >           1262    16398    car_service_db    DATABASE     �   CREATE DATABASE car_service_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE car_service_db;
                postgres    false            �            1259    16399    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16438    cars    TABLE     N  CREATE TABLE public.cars (
    id integer NOT NULL,
    make character varying(255) NOT NULL,
    model character varying(255) NOT NULL,
    year integer NOT NULL,
    "VIN" character varying(255) NOT NULL,
    "ownerId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.cars;
       public         heap    postgres    false            �            1259    16437    cars_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cars_id_seq;
       public          postgres    false    218            ?           0    0    cars_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;
          public          postgres    false    217            �            1259    16427 	   customers    TABLE     |  CREATE TABLE public.customers (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "phoneNumber" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    password character varying(255)
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    16426    customers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.customers_id_seq;
       public          postgres    false    216            @           0    0    customers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
          public          postgres    false    215            �            1259    16492 	   employees    TABLE     ^  CREATE TABLE public.employees (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "hireDate" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.employees;
       public         heap    postgres    false            �            1259    16491    employees_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.employees_id_seq;
       public          postgres    false    226            A           0    0    employees_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;
          public          postgres    false    225            �            1259    16475 
   orderItems    TABLE       CREATE TABLE public."orderItems" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "partId" integer NOT NULL,
    quantity integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public."orderItems";
       public         heap    postgres    false            �            1259    16474    orderItems_id_seq    SEQUENCE     �   CREATE SEQUENCE public."orderItems_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."orderItems_id_seq";
       public          postgres    false    224            B           0    0    orderItems_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."orderItems_id_seq" OWNED BY public."orderItems".id;
          public          postgres    false    223            �            1259    16463    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    "orderDate" timestamp with time zone NOT NULL,
    "customerId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16462    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    222            C           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    221            �            1259    16454    parts    TABLE     %  CREATE TABLE public.parts (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    "stockQuantity" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.parts;
       public         heap    postgres    false            �            1259    16453    parts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.parts_id_seq;
       public          postgres    false    220            D           0    0    parts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.parts_id_seq OWNED BY public.parts.id;
          public          postgres    false    219            �           2604    16441    cars id    DEFAULT     b   ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);
 6   ALTER TABLE public.cars ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    16430    customers id    DEFAULT     l   ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
 ;   ALTER TABLE public.customers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    16495    employees id    DEFAULT     l   ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);
 ;   ALTER TABLE public.employees ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    16478    orderItems id    DEFAULT     r   ALTER TABLE ONLY public."orderItems" ALTER COLUMN id SET DEFAULT nextval('public."orderItems_id_seq"'::regclass);
 >   ALTER TABLE public."orderItems" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    16466 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    16457    parts id    DEFAULT     d   ALTER TABLE ONLY public.parts ALTER COLUMN id SET DEFAULT nextval('public.parts_id_seq'::regclass);
 7   ALTER TABLE public.parts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            ,          0    16399    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   !@       0          0    16438    cars 
   TABLE DATA           a   COPY public.cars (id, make, model, year, "VIN", "ownerId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �@       .          0    16427 	   customers 
   TABLE DATA           z   COPY public.customers (id, "firstName", "lastName", email, "phoneNumber", "createdAt", "updatedAt", password) FROM stdin;
    public          postgres    false    216   tA       8          0    16492 	   employees 
   TABLE DATA           l   COPY public.employees (id, "firstName", "lastName", role, "hireDate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �A       6          0    16475 
   orderItems 
   TABLE DATA           c   COPY public."orderItems" (id, "orderId", "partId", quantity, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   �B       4          0    16463    orders 
   TABLE DATA           Y   COPY public.orders (id, "orderDate", "customerId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �B       2          0    16454    parts 
   TABLE DATA           h   COPY public.parts (id, name, description, price, "stockQuantity", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   C       E           0    0    cars_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cars_id_seq', 5, true);
          public          postgres    false    217            F           0    0    customers_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.customers_id_seq', 2, true);
          public          postgres    false    215            G           0    0    employees_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.employees_id_seq', 2, true);
          public          postgres    false    225            H           0    0    orderItems_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."orderItems_id_seq"', 2, true);
          public          postgres    false    223            I           0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 2, true);
          public          postgres    false    221            J           0    0    parts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.parts_id_seq', 2, true);
          public          postgres    false    219            �           2606    16403     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            �           2606    16447    cars cars_VIN_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "cars_VIN_key" UNIQUE ("VIN");
 =   ALTER TABLE ONLY public.cars DROP CONSTRAINT "cars_VIN_key";
       public            postgres    false    218            �           2606    16445    cars cars_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cars DROP CONSTRAINT cars_pkey;
       public            postgres    false    218            �           2606    16436    customers customers_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_email_key;
       public            postgres    false    216            �           2606    16434    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    216            �           2606    16499    employees employees_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            postgres    false    226            �           2606    16480    orderItems orderItems_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."orderItems"
    ADD CONSTRAINT "orderItems_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."orderItems" DROP CONSTRAINT "orderItems_pkey";
       public            postgres    false    224            �           2606    16468    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    222            �           2606    16461    parts parts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.parts
    ADD CONSTRAINT parts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.parts DROP CONSTRAINT parts_pkey;
       public            postgres    false    220            �           2606    16448    cars cars_ownerId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "cars_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.cars DROP CONSTRAINT "cars_ownerId_fkey";
       public          postgres    false    3213    216    218            �           2606    16481 "   orderItems orderItems_orderId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderItems"
    ADD CONSTRAINT "orderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public."orderItems" DROP CONSTRAINT "orderItems_orderId_fkey";
       public          postgres    false    224    3221    222            �           2606    16486 !   orderItems orderItems_partId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderItems"
    ADD CONSTRAINT "orderItems_partId_fkey" FOREIGN KEY ("partId") REFERENCES public.parts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public."orderItems" DROP CONSTRAINT "orderItems_partId_fkey";
       public          postgres    false    220    224    3219            �           2606    16469    orders orders_customerId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_customerId_fkey";
       public          postgres    false    216    3213    222            ,   w   x�e�K� D����<�wpC�#�����D]�י���k kz�r.�焅���j
XW��FW���_ܷ�\�?�i��#c�:�U`��|"��22�xO :� ɹ��S'�� c�Hr      0   �   x�����@E�ٯ�7��]�W�(���B�F�� k`%��Zʙ�s���U�JKe���(�p�?�qK؎�Az�ܠ���
ѷ�hz�XS�s�JĪ���+��!؄�����C�ОC����V��5�у�.��SdK�-�yר2אTY�q��>N�Y�p)�V�����t���4��.�&!�p�h%      .   s   x�3������t�O��2R+srR���s9��uML�t�-,8��<]cCC++#=SmS+c�1~\F�^�y�����%�Y@&�=��f�&��F������ 3.0      8   �   x��ͱ
�0�����%rwQ�y�Rpѵ�!��Qb���C���'��M0/[�0��,Ɏ�e��L�Qo�b�x���h�B��Z������p��k�0K��N�=4W���������d7�      6   :   x�3�4B#N##c]]cCC++S=K#mS+c��\F`�)2#F��� �8      4   9   x�3�4202�5��56P04�21�21�35��60�26�4$ �W�ˈ�n�L����� ��#�      2   �   x����
�0E痯x�4��Z?@���<l�1�i:����� \�p�p��a���K����iĵ��0�愎�9�h�FWj�`d߃"M�m�kZB�{*�Fw;2���*4�}���&8ywo^��8>U^�ɺ-p����>f9ެ��>1�=�J!�s�FN     