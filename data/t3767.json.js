window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3767","name":"شهریه ثابت","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"شهریه ثابت"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34589","object_id":"column-34589","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34592","object_id":"column-34592","name":"نیمسال تحصیلی","name_without_path":"نیمسال تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3776","name":"نیمسال تحصیلی","name_show_schema":"نیمسال تحصیلی"}]},{"id":"column-34591","object_id":"column-34591","name":"شهریه_ریال","name_without_path":"شهریه_ریال","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34590","object_id":"column-34590","name":"رشته تحصیلی","name_without_path":"رشته تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3761","name":"رشته تحصیلی","name_show_schema":"رشته تحصیلی"}]}],"relations":[{"name":"FK_شهریه ثابت","title":null,"description":null,"is_user_defined":false,"foreign_table":"شهریه ثابت","foreign_table_show_schema":"شهریه ثابت","foreign_table_verbose":"شهریه ثابت","foreign_table_verbose_show_schema":"شهریه ثابت","foreign_table_object_id":"t3767","primary_table":"رشته تحصیلی","primary_table_show_schema":"رشته تحصیلی","primary_table_verbose":"رشته تحصیلی","primary_table_verbose_show_schema":"رشته تحصیلی","primary_table_object_id":"t3761","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"رشته تحصیلی"}],"custom_fields":{}},{"name":"FK_شهریه ثابت_نیمسال تحصیلی_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"شهریه ثابت","foreign_table_show_schema":"شهریه ثابت","foreign_table_verbose":"شهریه ثابت","foreign_table_verbose_show_schema":"شهریه ثابت","foreign_table_object_id":"t3767","primary_table":"نیمسال تحصیلی","primary_table_show_schema":"نیمسال تحصیلی","primary_table_verbose":"نیمسال تحصیلی","primary_table_verbose_show_schema":"نیمسال تحصیلی","primary_table_object_id":"t3776","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نیمسال تحصیلی"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":{"uses":[{"object_name":"شهریه ثابت","object_name_show_schema":"شهریه ثابت","object_type":"TABLE","object_id":"t3767","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"رشته تحصیلی","object_name_show_schema":"رشته تحصیلی","object_type":"TABLE","object_id":"t3761","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"نیمسال تحصیلی","object_name_show_schema":"نیمسال تحصیلی","object_type":"TABLE","object_id":"t3776","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2023-03-09 02:00"};