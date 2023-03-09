window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3766","name":"شخص","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"amuzeshyar@localhost","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"شخص"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34579","object_id":"column-34579","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34583","object_id":"column-34583","name":"نام","name_without_path":"نام","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34584","object_id":"column-34584","name":"نام خانوادگی","name_without_path":"نام خانوادگی","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34588","object_id":"column-34588","name":"کد ملی","name_without_path":"کد ملی","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34585","object_id":"column-34585","name":"نام پدر","name_without_path":"نام پدر","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34582","object_id":"column-34582","name":"شماره همراه","name_without_path":"شماره همراه","description":"برای اطلاع رسانی و یاد آوری ها","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34587","object_id":"column-34587","name":"پست الکترونیک","name_without_path":"پست الکترونیک","description":"برای اطلاع رسانی و یاد آوری ها","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34586","object_id":"column-34586","name":"نقش","name_without_path":"نقش","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3774","name":"مقدار ثابت","name_show_schema":"مقدار ثابت"}]},{"id":"column-34581","object_id":"column-34581","name":"تصویر","name_without_path":"تصویر","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34580","object_id":"column-34580","name":"password_hash","name_without_path":"password_hash","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_شخص_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"شخص","foreign_table_show_schema":"شخص","foreign_table_verbose":"شخص","foreign_table_verbose_show_schema":"شخص","foreign_table_object_id":"t3766","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نقش"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":{"uses":[{"object_name":"شخص","object_name_show_schema":"شخص","object_type":"TABLE","object_id":"t3766","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"مقدار ثابت","object_name_show_schema":"مقدار ثابت","object_type":"TABLE","object_id":"t3774","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2023-03-09 02:00"};