window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3774","name":"مقدار ثابت","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">System.Byte[]</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"آموزشیار","id":"d7"}},{"field":"Schema","value":""},{"field":"Name","value":"مقدار ثابت"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34624","object_id":"column-34624","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34626","object_id":"column-34626","name":"عنوان","name_without_path":"عنوان","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34625","object_id":"column-34625","name":"ثابت مادر","name_without_path":"ثابت مادر","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3774","name":"مقدار ثابت","name_show_schema":"مقدار ثابت"}]}],"relations":[{"name":"FK_مقدار ثابت","title":null,"description":null,"is_user_defined":false,"foreign_table":"مقدار ثابت","foreign_table_show_schema":"مقدار ثابت","foreign_table_verbose":"مقدار ثابت","foreign_table_verbose_show_schema":"مقدار ثابت","foreign_table_object_id":"t3774","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"ثابت مادر"}],"custom_fields":{}},{"name":"FK_اعتراض به نمره_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"اعتراض به نمره","foreign_table_show_schema":"اعتراض به نمره","foreign_table_verbose":"اعتراض به نمره","foreign_table_verbose_show_schema":"اعتراض به نمره","foreign_table_object_id":"t3751","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"وضعیت درخواست"}],"custom_fields":{}},{"name":"FK_ترم_درس_شهریه_مقدار ثابت_id2","title":null,"description":null,"is_user_defined":false,"foreign_table":"ترم_درس_شهریه","foreign_table_show_schema":"ترم_درس_شهریه","foreign_table_verbose":"ترم_درس_شهریه","foreign_table_verbose_show_schema":"ترم_درس_شهریه","foreign_table_object_id":"t3755","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع واحد درس"}],"custom_fields":{}},{"name":"FK_دانشجو_دپارتمان","title":null,"description":null,"is_user_defined":false,"foreign_table":"دانشجو_دپارتمان","foreign_table_show_schema":"دانشجو_دپارتمان","foreign_table_verbose":"دانشجو_دپارتمان","foreign_table_verbose_show_schema":"دانشجو_دپارتمان","foreign_table_object_id":"t3756","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع ثبت نام"}],"custom_fields":{}},{"name":"FK_درس_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"درس","foreign_table_show_schema":"درس","foreign_table_verbose":"درس","foreign_table_verbose_show_schema":"درس","foreign_table_object_id":"t3760","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع واحد"}],"custom_fields":{}},{"name":"FK_سابق2ه اخذ و حذف درس_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"سابقه اخذ و حذف درس","foreign_table_show_schema":"سابقه اخذ و حذف درس","foreign_table_verbose":"سابقه اخذ و حذف درس","foreign_table_verbose_show_schema":"سابقه اخذ و حذف درس","foreign_table_object_id":"t3764","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع عملیات"}],"custom_fields":{}},{"name":"FK_ساختمان_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"ساختمان","foreign_table_show_schema":"ساختمان","foreign_table_verbose":"ساختمان","foreign_table_verbose_show_schema":"ساختمان","foreign_table_object_id":"t3765","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع ساختمان"}],"custom_fields":{}},{"name":"FK_شخص_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"شخص","foreign_table_show_schema":"شخص","foreign_table_verbose":"شخص","foreign_table_verbose_show_schema":"شخص","foreign_table_object_id":"t3766","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نقش"}],"custom_fields":{}},{"name":"FK_فاکتور مالی دانشجو_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"فاکتور مالی دانشجو","foreign_table_show_schema":"فاکتور مالی دانشجو","foreign_table_verbose":"فاکتور مالی دانشجو","foreign_table_verbose_show_schema":"فاکتور مالی دانشجو","foreign_table_object_id":"t3768","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"وضعیت پرداخت"}],"custom_fields":{}},{"name":"FK_فاکتور مالی دانشجو_مقدار ثابت_id2","title":null,"description":null,"is_user_defined":false,"foreign_table":"فاکتور مالی دانشجو","foreign_table_show_schema":"فاکتور مالی دانشجو","foreign_table_verbose":"فاکتور مالی دانشجو","foreign_table_verbose_show_schema":"فاکتور مالی دانشجو","foreign_table_object_id":"t3768","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع هزینه"}],"custom_fields":{}},{"name":"FK_گرایشِ رشته_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"گرایشِ رشته","foreign_table_show_schema":"گرایشِ رشته","foreign_table_verbose":"گرایشِ رشته","foreign_table_verbose_show_schema":"گرایشِ رشته","foreign_table_object_id":"t3770","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"مقطع تحصیلی"}],"custom_fields":{}},{"name":"FK_مکانِ کلاس_نوع کلاس","title":null,"description":null,"is_user_defined":false,"foreign_table":"مکانِ کلاس","foreign_table_show_schema":"مکانِ کلاس","foreign_table_verbose":"مکانِ کلاس","foreign_table_verbose_show_schema":"مکانِ کلاس","foreign_table_object_id":"t3775","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع کلاس"}],"custom_fields":{}},{"name":"FK_نیمسال تحصیلی","title":null,"description":null,"is_user_defined":false,"foreign_table":"نیمسال تحصیلی","foreign_table_show_schema":"نیمسال تحصیلی","foreign_table_verbose":"نیمسال تحصیلی","foreign_table_verbose_show_schema":"نیمسال تحصیلی","foreign_table_object_id":"t3776","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع نیمسال"}],"custom_fields":{}},{"name":"FK_واحد_مقدار ثابت_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"واحد","foreign_table_show_schema":"واحد","foreign_table_verbose":"واحد","foreign_table_verbose_show_schema":"واحد","foreign_table_object_id":"t3777","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"نوع واحد"}],"custom_fields":{}},{"name":"FK_واحد_مقدار ثابت_id2","title":null,"description":null,"is_user_defined":false,"foreign_table":"واحد","foreign_table_show_schema":"واحد","foreign_table_verbose":"واحد","foreign_table_verbose_show_schema":"واحد","foreign_table_object_id":"t3777","primary_table":"مقدار ثابت","primary_table_show_schema":"مقدار ثابت","primary_table_verbose":"مقدار ثابت","primary_table_verbose_show_schema":"مقدار ثابت","primary_table_object_id":"t3774","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"استان"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2023-03-09 19:15"};