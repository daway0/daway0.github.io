window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3761","name":"رشته تحصیلی","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"آموزشیار","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"رشته تحصیلی"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34557","object_id":"column-34557","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34558","object_id":"column-34558","name":"نام","name_without_path":"نام","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34559","object_id":"column-34559","name":"نام لاتین","name_without_path":"نام لاتین","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_شهریه ثابت","title":null,"description":null,"is_user_defined":false,"foreign_table":"شهریه ثابت","foreign_table_show_schema":"شهریه ثابت","foreign_table_verbose":"شهریه ثابت","foreign_table_verbose_show_schema":"شهریه ثابت","foreign_table_object_id":"t3767","primary_table":"رشته تحصیلی","primary_table_show_schema":"رشته تحصیلی","primary_table_verbose":"رشته تحصیلی","primary_table_verbose_show_schema":"رشته تحصیلی","primary_table_object_id":"t3761","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"رشته تحصیلی"}],"custom_fields":{}},{"name":"FK_گرایشِ رشته_رشته تحصیلی_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایشِ رشته","foreign_table_show_schema":"گرایشِ رشته","foreign_table_verbose":"گرایشِ رشته","foreign_table_verbose_show_schema":"گرایشِ رشته","foreign_table_object_id":"t3770","primary_table":"رشته تحصیلی","primary_table_show_schema":"رشته تحصیلی","primary_table_verbose":"رشته تحصیلی","primary_table_verbose_show_schema":"رشته تحصیلی","primary_table_object_id":"t3761","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"رشته تحصیلی"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 19:15"};