window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3739","name":"کلاس","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d6"}},{"field":"Schema","value":""},{"field":"Name","value":"کلاس"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34431","object_id":"column-34431","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34436","object_id":"column-34436","name":"مکان برگزاری","name_without_path":"مکان برگزاری","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34433","object_id":"column-34433","name":"درس","name_without_path":"درس","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3730","name":"درس","name_show_schema":"درس"}]},{"id":"column-34432","object_id":"column-34432","name":"استاد","name_without_path":"استاد","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34434","object_id":"column-34434","name":"دپارتمان ارائه دهنده","name_without_path":"دپارتمان ارائه دهنده","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3742","name":"گرایش_دپارتمانِ واحد","name_show_schema":"گرایش_دپارتمانِ واحد"}]},{"id":"column-34435","object_id":"column-34435","name":"ظرفیت","name_without_path":"ظرفیت","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34438","object_id":"column-34438","name":"نیمسال تحصیلی","name_without_path":"نیمسال تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34437","object_id":"column-34437","name":"نوع ارائه کلاس","name_without_path":"نوع ارائه کلاس","description":"اینکه حضوری است یا مجازی یا هر دو","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_کلاس","title":null,"description":null,"is_user_defined":false,"foreign_table":"کلاس","foreign_table_show_schema":"کلاس","foreign_table_verbose":"کلاس","foreign_table_verbose_show_schema":"کلاس","foreign_table_object_id":"t3739","primary_table":"درس","primary_table_show_schema":"درس","primary_table_verbose":"درس","primary_table_verbose_show_schema":"درس","primary_table_object_id":"t3730","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"درس"}],"custom_fields":{}},{"name":"FK_کلاس_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"کلاس","foreign_table_show_schema":"کلاس","foreign_table_verbose":"کلاس","foreign_table_verbose_show_schema":"کلاس","foreign_table_object_id":"t3739","primary_table":"گرایش_دپارتمانِ واحد","primary_table_show_schema":"گرایش_دپارتمانِ واحد","primary_table_verbose":"گرایش_دپارتمانِ واحد","primary_table_verbose_show_schema":"گرایش_دپارتمانِ واحد","primary_table_object_id":"t3742","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"int","foreign_column_path":null,"foreign_column":"دپارتمان ارائه دهنده"}],"custom_fields":{}},{"name":"FK_زمانبندی_کلاس_کلاس_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"زمانبندی_کلاس","foreign_table_show_schema":"زمانبندی_کلاس","foreign_table_verbose":"زمانبندی_کلاس","foreign_table_verbose_show_schema":"زمانبندی_کلاس","foreign_table_object_id":"t3733","primary_table":"کلاس","primary_table_show_schema":"کلاس","primary_table_verbose":"کلاس","primary_table_verbose_show_schema":"کلاس","primary_table_object_id":"t3739","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"کلاس"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2023-03-09 01:51"};