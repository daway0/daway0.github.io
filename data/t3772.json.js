window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3772","name":"گرایش_دپارتمانِ واحد","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"گرایش_دپارتمانِ واحد"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"مدل","id":"m109"}]}],"columns":[{"id":"column-34617","object_id":"column-34617","name":"int","name_without_path":"int","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34619","object_id":"column-34619","name":"گرایش رشته","name_without_path":"گرایش رشته","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3770","name":"گرایشِ رشته","name_show_schema":"گرایشِ رشته"}]},{"id":"column-34618","object_id":"column-34618","name":"دپارتمان","name_without_path":"دپارتمان","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3778","name":"واحد_دپارتمان","name_show_schema":"واحد_دپارتمان"}]}],"relations":[{"name":"FK_گرایش_دپارتمانِ واحد","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایش_دپارتمانِ واحد","foreign_table_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_verbose":"گرایش_دپارتمانِ واحد","foreign_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_object_id":"t3772","primary_table":"گرایشِ رشته","primary_table_show_schema":"گرایشِ رشته","primary_table_verbose":"گرایشِ رشته","primary_table_verbose_show_schema":"گرایشِ رشته","primary_table_object_id":"t3770","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"گرایش رشته"}],"custom_fields":{}},{"name":"FK_گرایش_دپارتمانِ واحد_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایش_دپارتمانِ واحد","foreign_table_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_verbose":"گرایش_دپارتمانِ واحد","foreign_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_object_id":"t3772","primary_table":"واحد_دپارتمان","primary_table_show_schema":"واحد_دپارتمان","primary_table_verbose":"واحد_دپارتمان","primary_table_verbose_show_schema":"واحد_دپارتمان","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دپارتمان"}],"custom_fields":{}},{"name":"FK_دانشجو_دپارتمان_گرایش_دپارتمانِ واحد_int","title":null,"description":null,"is_user_defined":false,"foreign_table":"دانشجو_دپارتمان","foreign_table_show_schema":"دانشجو_دپارتمان","foreign_table_verbose":"دانشجو_دپارتمان","foreign_table_verbose_show_schema":"دانشجو_دپارتمان","foreign_table_object_id":"t3756","primary_table":"گرایش_دپارتمانِ واحد","primary_table_show_schema":"گرایش_دپارتمانِ واحد","primary_table_verbose":"گرایش_دپارتمانِ واحد","primary_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","primary_table_object_id":"t3772","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"int","foreign_column_path":null,"foreign_column":"دپارتمان_گرایش_مقطع"}],"custom_fields":{}},{"name":"FK_کلاس_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"کلاس","foreign_table_show_schema":"کلاس","foreign_table_verbose":"کلاس","foreign_table_verbose_show_schema":"کلاس","foreign_table_object_id":"t3769","primary_table":"گرایش_دپارتمانِ واحد","primary_table_show_schema":"گرایش_دپارتمانِ واحد","primary_table_verbose":"گرایش_دپارتمانِ واحد","primary_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","primary_table_object_id":"t3772","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"int","foreign_column_path":null,"foreign_column":"دپارتمان ارائه دهنده"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"int","name":"int"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 02:00"};