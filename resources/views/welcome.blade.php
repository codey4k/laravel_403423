@extends('layout')

@section('title', 'Home')

@section('content')
    
    @include('components/menu')
    
    @include('components/header', ['title' => 'Welcome'])
    
    <main class="main">
        <div class="services"></div>
    </main>
    
    @include('components/footer')
    
@stop