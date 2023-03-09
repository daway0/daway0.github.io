window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3770","name":"گرایشِ رشته","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"آموزشیار","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"گرایشِ رشته"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34609","object_id":"column-34609","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34611","object_id":"column-34611","name":"عنوان","name_without_path":"عنوان","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34612","object_id":"column-34612","name":"عنوان لاتین","name_without_path":"عنوان لاتین","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34610","object_id":"column-34610","name":"رشته تحصیلی","name_without_path":"رشته تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3761","name":"رشته تحصیلی","name_show_schema":"رشته تحصیلی"}]},{"id":"column-34613","object_id":"column-34613","name":"مقطع تحصیلی","name_without_path":"مقطع تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3774","name":"مقدار ثابت","name_show_schema":"مقدار ثابت"}]}],"relations":[{"name":"FK_گرایشِ رشته_رشته تحصیلی_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایشِ رشته","foreign_table_show_schema":"گرایشِ رشته","foreign_table_verbose":"گرایشِ رشته","foreign_table_verbose_show_schema":"گرایشِ رشته","foreign_table_object_id":"t3770","primary_table":"رشته تحصیلی","primary_table_show_schema":"رشته تحصیلی","primary_table_verbose":"رشته تحصیلی","primary_table_verbose_show_schema":"رشته تحصیلی","primary_table_object_id":"t3761","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"رشته تحصیلی"}],"custom_fields":{}},{"name":"FK_گرایشِ رشته_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایشِ رشته","foreign_table_show_schema":"گرایشِ رشته","foreign_table_verbose":"گرایشِ رشته","foreign_table_verbose_show_schema":"گرایشِ رشته","foreign_table_object_id":"t3770","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"مقطع تحصیلی"}],"custom_fields":{}},{"name":"FK_درس_گرایشِ رشته_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"درس","foreign_table_show_schema":"درس","foreign_table_verbose":"درس","foreign_table_verbose_show_schema":"درس","foreign_table_object_id":"t3760","primary_table":"گرایشِ رشته","primary_table_show_schema":"گرایشِ رشته","primary_table_verbose":"گرایشِ رشته","primary_table_verbose_show_schema":"گرایشِ رشته","primary_table_object_id":"t3770","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"رشته_گرایش_مقطع درس"}],"custom_fields":{}},{"name":"FK_گرایش_دپارتمانِ واحد","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایش_دپارتمانِ واحد","foreign_table_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_verbose":"گرایش_دپارتمانِ واحد","foreign_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","foreign_table_object_id":"t3772","primary_table":"گرایشِ رشته","primary_table_show_schema":"گرایشِ رشته","primary_table_verbose":"گرایشِ رشته","primary_table_verbose_show_schema":"گرایشِ رشته","primary_table_object_id":"t3770","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"گرایش رشته"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 19:15"};