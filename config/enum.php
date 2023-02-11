<?php

return [
    'roles' => [
        ['name' => 'Admin', 'description' => 'Administrator'],
        ['name' => 'Editor', 'description' => 'Editor'],
        ['name' => 'Writer', 'description' => 'Article writer'],
    ],
    'notification_type' => [
        'GENERAL', 'ADMIN', 'USER'
    ],
    'article_status' => [
        'In Review', 'Published', 'Unpublished', 'Needs Attention'
    ]
];
