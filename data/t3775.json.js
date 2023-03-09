window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3775","name":"مکانِ کلاس","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"مکانِ کلاس"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"مدل","id":"m109"}]}],"columns":[{"id":"column-34627","object_id":"column-34627","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34629","object_id":"column-34629","name":"ساختمان","name_without_path":"ساختمان","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3765","name":"ساختمان","name_show_schema":"ساختمان"}]},{"id":"column-34630","object_id":"column-34630","name":"طبقه","name_without_path":"طبقه","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34628","object_id":"column-34628","name":"بلوک","name_without_path":"بلوک","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34632","object_id":"column-34632","name":"نام کلاس","name_without_path":"نام کلاس","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34631","object_id":"column-34631","name":"ظرفیت","name_without_path":"ظرفیت","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34633","object_id":"column-34633","name":"نوع کلاس","name_without_path":"نوع کلاس","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3774","name":"مقدار ثابت","name_show_schema":"مقدار ثابت"}]}],"relations":[{"name":"FK_مکانِ کلاس_ساختمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"مکانِ کلاس","foreign_table_show_schema":"مکانِ کلاس","foreign_table_verbose":"مکانِ کلاس","foreign_table_verbose_show_schema":"مکانِ کلاس","foreign_table_object_id":"t3775","primary_table":"ساختمان","primary_table_show_schema":"ساختمان","primary_table_verbose":"ساختمان","primary_table_verbose_show_schema":"ساختمان","primary_table_object_id":"t3765","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"ساختمان"}],"custom_fields":{}},{"name":"FK_مکانِ کلاس_نوع کلاس","title":null,"description":null,"is_user_defined":false,"foreign_table":"مکانِ کلاس","foreign_table_show_schema":"مکانِ کلاس","foreign_table_verbose":"مکانِ کلاس","foreign_table_verbose_show_schema":"مکانِ کلاس","foreign_table_object_id":"t3775","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع کلاس"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 02:00"};