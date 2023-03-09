window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3750","name":"اطلاعیه","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"اطلاعیه"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"مدل","id":"m109"}]}],"columns":[{"id":"column-34487","object_id":"column-34487","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34494","object_id":"column-34494","name":"واحد آموزشی","name_without_path":"واحد آموزشی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34491","object_id":"column-34491","name":"رشته تحصیلی","name_without_path":"رشته تحصیلی","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34495","object_id":"column-34495","name":"گرایش رشته","name_without_path":"گرایش رشته","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34493","object_id":"column-34493","name":"نیمسال ورودی خاص","name_without_path":"نیمسال ورودی خاص","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34490","object_id":"column-34490","name":"دپارتمان خاص","name_without_path":"دپارتمان خاص","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3778","name":"واحد_دپارتمان","name_show_schema":"واحد_دپارتمان"}]},{"id":"column-34489","object_id":"column-34489","name":"دانشجو","name_without_path":"دانشجو","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3756","name":"دانشجو_دپارتمان","name_show_schema":"دانشجو_دپارتمان"}]},{"id":"column-34492","object_id":"column-34492","name":"متن اطلاعیه","name_without_path":"متن اطلاعیه","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34488","object_id":"column-34488","name":"تاریخ و زمان ثبت","name_without_path":"تاریخ و زمان ثبت","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_اطلاعیه_دانشجو_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اطلاعیه","foreign_table_show_schema":"اطلاعیه","foreign_table_verbose":"اطلاعیه","foreign_table_verbose_show_schema":"اطلاعیه","foreign_table_object_id":"t3750","primary_table":"دانشجو_دپارتمان","primary_table_show_schema":"دانشجو_دپارتمان","primary_table_verbose":"دانشجو_دپارتمان","primary_table_verbose_show_schema":"دانشجو_دپارتمان","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دانشجو"}],"custom_fields":{}},{"name":"FK_اطلاعیه_واحد_دپارتمان_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اطلاعیه","foreign_table_show_schema":"اطلاعیه","foreign_table_verbose":"اطلاعیه","foreign_table_verbose_show_schema":"اطلاعیه","foreign_table_object_id":"t3750","primary_table":"واحد_دپارتمان","primary_table_show_schema":"واحد_دپارتمان","primary_table_verbose":"واحد_دپارتمان","primary_table_verbose_show_schema":"واحد_دپارتمان","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دپارتمان خاص"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 02:00"};