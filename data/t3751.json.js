window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3751","name":"اعتراض به نمره","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">System.Byte[]</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"آموزشیار","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"اعتراض به نمره"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34496","object_id":"column-34496","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34500","object_id":"column-34500","name":"متن درخواست","name_without_path":"متن درخواست","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34502","object_id":"column-34502","name":"وضعیت درخواست","name_without_path":"وضعیت درخواست","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3774","name":"مقدار ثابت","name_show_schema":"مقدار ثابت"}]},{"id":"column-34501","object_id":"column-34501","name":"متن پاسخ درخواست","name_without_path":"متن پاسخ درخواست","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34497","object_id":"column-34497","name":"تاریخ و زمان ثبت اعتراض","name_without_path":"تاریخ و زمان ثبت اعتراض","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34498","object_id":"column-34498","name":"تاریخ و زمان پاسخ","name_without_path":"تاریخ و زمان پاسخ","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34499","object_id":"column-34499","name":"دانشجو_کلاس","name_without_path":"دانشجو_کلاس","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3757","name":"دانشجو_کلاس","name_show_schema":"دانشجو_کلاس"}]}],"relations":[{"name":"FK_اعتراض به نمره_دانشجو_کلاس_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اعتراض به نمره","foreign_table_show_schema":"اعتراض به نمره","foreign_table_verbose":"اعتراض به نمره","foreign_table_verbose_show_schema":"اعتراض به نمره","foreign_table_object_id":"t3751","primary_table":"دانشجو_کلاس","primary_table_show_schema":"دانشجو_کلاس","primary_table_verbose":"دانشجو_کلاس","primary_table_verbose_show_schema":"دانشجو_کلاس","primary_table_object_id":"t3757","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"دانشجو_کلاس"}],"custom_fields":{}},{"name":"FK_اعتراض به نمره_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اعتراض به نمره","foreign_table_show_schema":"اعتراض به نمره","foreign_table_verbose":"اعتراض به نمره","foreign_table_verbose_show_schema":"اعتراض به نمره","foreign_table_object_id":"t3751","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"وضعیت درخواست"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 19:15"};