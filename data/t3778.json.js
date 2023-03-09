window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3778","name":"واحد_دپارتمان","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"واحد_دپارتمان"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34651","object_id":"column-34651","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34655","object_id":"column-34655","name":"واحد","name_without_path":"واحد","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34652","object_id":"column-34652","name":"دپارتمان","name_without_path":"دپارتمان","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3758","name":"دپارتمان","name_show_schema":"دپارتمان"}]},{"id":"column-34653","object_id":"column-34653","name":"دپارتمان مادر","name_without_path":"دپارتمان مادر","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34654","object_id":"column-34654","name":"ساختمان","name_without_path":"ساختمان","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3765","name":"ساختمان","name_show_schema":"ساختمان"}]}],"relations":[{"name":"FK_واحد_دپارتمان_دپارتمان_Id","title":null,"description":null,"is_user_defined":false,"foreign_table":"واحد_دپارتمان","foreign_table_show_schema":"واحد_دپارتمان","foreign_table_verbose":"واحد_دپارتمان","foreign_table_verbose_show_schema":"واحد_دپارتمان","foreign_table_object_id":"t3778","primary_table":"دپارتمان","primary_table_show_schema":"دپارتمان","primary_table_verbose":"دپارتمان","primary_table_verbose_show_schema":"دپارتمان","primary_table_object_id":"t3758","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"Id","foreign_column_path":null,"foreign_column":"دپارتمان"}],"custom_fields":{}},{"name":"FK_واحد_دپارتمان_ساختمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"واحد_دپارتمان","foreign_table_show_schema":"واحد_دپارتمان","foreign_table_verbose":"واحد_دپارتمان","foreign_table_verbose_show_schema":"واحد_دپارتمان","foreign_table_object_id":"t3778","primary_table":"ساختمان","primary_table_show_schema":"ساختمان","primary_table_verbose":"ساختمان","primary_table_verbose_show_schema":"ساختمان","primary_table_object_id":"t3765","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"ساختمان"}],"custom_fields":{}},{"name":"FK_اطلاعیه_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اطلاعیه","foreign_table_show_schema":"اطلاعیه","foreign_table_verbose":"اطلاعیه","foreign_table_verbose_show_schema":"اطلاعیه","foreign_table_object_id":"t3750","primary_table":"واحد_دپارتمان","primary_table_show_schema":"واحد_دپارتمان","primary_table_verbose":"واحد_دپارتمان","primary_table_verbose_show_schema":"واحد_دپارتمان","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دپارتمان خاص"}],"custom_fields":{}},{"name":"FK_گرایش_دپارتمانِ واحد_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایش_دپارتمانِ واحد","foreign_table_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_verbose":"گرایش_دپارتمانِ واحد","foreign_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_object_id":"t3772","primary_table":"واحد_دپارتمان","primary_table_show_schema":"واحد_دپارتمان","primary_table_verbose":"واحد_دپارتمان","primary_table_verbose_show_schema":"واحد_دپارتمان","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دپارتمان"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":{"uses":[{"object_name":"واحد_دپارتمان","object_name_show_schema":"واحد_دپارتمان","object_type":"TABLE","object_id":"t3778","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"دپارتمان","object_name_show_schema":"دپارتمان","object_type":"TABLE","object_id":"t3758","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"ساختمان","object_name_show_schema":"ساختمان","object_type":"TABLE","object_id":"t3765","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"واحد_دپارتمان","object_name_show_schema":"واحد_دپارتمان","object_type":"TABLE","object_id":"t3778","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"اطلاعیه","object_name_show_schema":"اطلاعیه","object_type":"TABLE","object_id":"t3750","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"گرایش_دپارتمانِ واحد","object_name_show_schema":"گرایش_دپارتمانِ واحد","object_type":"TABLE","object_id":"t3772","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2023-03-09 02:00"};