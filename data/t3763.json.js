window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3763","name":"زمانبندی_کلاس","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"آموزشیار","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"زمانبندی_کلاس"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34564","object_id":"column-34564","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34567","object_id":"column-34567","name":"کلاس","name_without_path":"کلاس","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3769","name":"کلاس","name_show_schema":"کلاس"}]},{"id":"column-34565","object_id":"column-34565","name":"روز هفته","name_without_path":"روز هفته","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34566","object_id":"column-34566","name":"زمان تشکیل کلاس","name_without_path":"زمان تشکیل کلاس","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3762","name":"زمان بندی","name_show_schema":"زمان بندی"}]}],"relations":[{"name":"FK_زمانبندی_کلاس_زمان بندی تشکیل کلاس_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"زمانبندی_کلاس","foreign_table_show_schema":"زمانبندی_کلاس","foreign_table_verbose":"زمانبندی_کلاس","foreign_table_verbose_show_schema":"زمانبندی_کلاس","foreign_table_object_id":"t3763","primary_table":"زمان بندی","primary_table_show_schema":"زمان بندی","primary_table_verbose":"زمان بندی","primary_table_verbose_show_schema":"زمان بندی","primary_table_object_id":"t3762","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"زمان تشکیل کلاس"}],"custom_fields":{}},{"name":"FK_زمانبندی_کلاس_کلاس_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"زمانبندی_کلاس","foreign_table_show_schema":"زمانبندی_کلاس","foreign_table_verbose":"زمانبندی_کلاس","foreign_table_verbose_show_schema":"زمانبندی_کلاس","foreign_table_object_id":"t3763","primary_table":"کلاس","primary_table_show_schema":"کلاس","primary_table_verbose":"کلاس","primary_table_verbose_show_schema":"کلاس","primary_table_object_id":"t3769","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"کلاس"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 19:15"};