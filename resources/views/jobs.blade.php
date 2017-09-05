@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h3><i class="fa fa-briefcase" aria-hidden="true"></i> Your Jobs</h3><br>
            @if ($jobs)
                @foreach($jobs as $job)
                <div class="panel panel-default">
                    <div class="panel-heading">{{ $job->title }}</div>

                    <div class="panel-body">
						
                        <p><strong>Description:</strong> {{ $job->description }}</p>
						<p><strong>Hours:</strong> {{ $job->hours }}</p>
						<p><strong>Salary:</strong> {{ $job->salary }}</p>
						<p><strong>Available From:</strong> {{ $job->availablefrom }}</p>
						<p><strong>Location:</strong> {{ $job->location }}</p>
						<p><strong>Start Date:</strong> {{ $job->startdate }}</p>
						
						 <p>
                        <button class="btn btn-primary">
                            Edit
                        </button>
                    </p>
					
					 <p>
                        <button class="btn btn-primary">
                            Delete
                        </button>
                    </p>
					
                    </div>
                </div>
                @endforeach
            @endif
        </div>
    </div>
</div>
@endsection
