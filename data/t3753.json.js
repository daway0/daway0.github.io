window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3753","name":"پیشنیاز_همنیاز_درس","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"پیشنیاز_همنیاز_درس"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34511","object_id":"column-34511","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34512","object_id":"column-34512","name":"درس1","name_without_path":"درس1","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3760","name":"درس","name_show_schema":"درس"}]},{"id":"column-34515","object_id":"column-34515","name":"پیشنیاز","name_without_path":"پیشنیاز","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34514","object_id":"column-34514","name":"همنیاز","name_without_path":"همنیاز","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34513","object_id":"column-34513","name":"درس2","name_without_path":"درس2","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3760","name":"درس","name_show_schema":"درس"}]}],"relations":[{"name":"FK_پیشنیاز_همنیاز_درس","title":null,"description":null,"is_user_defined":false,"foreign_table":"پیشنیاز_همنیاز_درس","foreign_table_show_schema":"پیشنیاز_همنیاز_درس","foreign_table_verbose":"پیشنیاز_همنیاز_درس","foreign_table_verbose_show_schema":"پیشنیاز_همنیاز_درس","foreign_table_object_id":"t3753","primary_table":"درس","primary_table_show_schema":"درس","primary_table_verbose":"درس","primary_table_verbose_show_schema":"درس","primary_table_object_id":"t3760","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"درس1"}],"custom_fields":{}},{"name":"FK_پیشنیاز_همنیاز_درس_درس_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"پیشنیاز_همنیاز_درس","foreign_table_show_schema":"پیشنیاز_همنیاز_درس","foreign_table_verbose":"پیشنیاز_همنیاز_درس","foreign_table_verbose_show_schema":"پیشنیاز_همنیاز_درس","foreign_table_object_id":"t3753","primary_table":"درس","primary_table_show_schema":"درس","primary_table_verbose":"درس","primary_table_verbose_show_schema":"درس","primary_table_object_id":"t3760","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"درس2"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":{"uses":[{"object_name":"پیشنیاز_همنیاز_درس","object_name_show_schema":"پیشنیاز_همنیاز_درس","object_type":"TABLE","object_id":"t3753","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"درس","object_name_show_schema":"درس","object_type":"TABLE","object_id":"t3760","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"درس","object_name_show_schema":"درس","object_type":"TABLE","object_id":"t3760","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2023-03-09 19:15"};