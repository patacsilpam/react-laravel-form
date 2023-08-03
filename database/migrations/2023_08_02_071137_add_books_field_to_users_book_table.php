<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users_book', function (Blueprint $table) {
            $table->string('book_id')->after('id');
            $table->string('book_name')->after('book_id');
            $table->string('author')->after('book_name');
            $table->integer('year')->after('author');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users_book', function (Blueprint $table) {
            Schema::dropColumn('book_id');
            Schema::dropColumn('book_name');
            Schema::dropColumn('author');
            Schema::dropColumn('year');
        });
    }
};
